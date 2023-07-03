import { useCallback, useState, useMemo } from 'react';
import { PrimaryKey } from '@atom/common';
import { Icons, ScrollableView } from '@/atom-design-system';
import styles from './LabelManager.module.scss';
import { LabelManagerTag } from '../label-manager-tag';
import classNames from 'classnames';

export interface LabelManagerItem {
  isMinified?: boolean;
  id: PrimaryKey;
  labelText?: string;
  statusId?: boolean;
  isBordered?: boolean;
  hasSuffixIcon?: boolean;
}

export interface LabelManagerProps {
  translations: {
    deleteLabel: string;
    addLabel: string;
    apply: string;
  };
  typeId: number;
  entityIds: PrimaryKey[];
  actionType: 'add' | 'delete';
  backAction?: boolean;
  searchAction?: boolean;
  onLabelClick: (id: PrimaryKey, isSelected) => void;
  onBack?: () => void;
  onSearch?: (value: string) => void;
  onApply?: (id: PrimaryKey) => void;
  labelsToDelete: LabelManagerItem[];
  attachAction: any;
  deleteAction: any;
  getAction: any;
}

export const LabelManager = ({
  backAction,
  onBack,
  actionType,
  typeId,
  entityIds,
  searchAction,
  translations,
  getAction,
  deleteAction,
  attachAction,
  onApply,
  labelsToDelete
}: LabelManagerProps) => {
  const [refetch, { data, isLoading: isGetLabelsLoading }] = getAction();
  const [deleteLabels] = deleteAction();
  const [attachToEntity] = attachAction();

  const [searchFieldValue, setSearchFieldValue] = useState('');
  const [localSearchList, setLocalSearchList] = useState(labelsToDelete.concat([]));
  const [selectedId, setSelectedId] = useState<PrimaryKey>();

  const handleSearch = useCallback(
    (e) => {
      setSearchFieldValue(e.target.value);
      if (labelsToDelete) {
        const searchResults = !e.target.value
          ? labelsToDelete.concat([])
          : localSearchList.filter((item) => item.labelText.includes(e.target.value));
        setLocalSearchList(searchResults);
      } else {
        refetch();
      }
    },
    [labelsToDelete]
  );

  const labels = useMemo(() => (actionType === 'add' ? data?.results : localSearchList), [localSearchList, data]);

  const handleApply = useCallback(() => {
    actionType === 'add' ? handleAttach() : handleDelete();
  }, []);

  const handleAttach = useCallback(() => {
    attachToEntity({
      ids: entityIds,
      labelId: selectedId
    });
    onApply(selectedId);
  }, [entityIds, entityIds]);

  const handleDelete = useCallback(() => {
    deleteLabels({
      ids: entityIds,
      labelId: selectedId,
      typeId
    });
    onApply(selectedId);
  }, [typeId, selectedId, entityIds]);

  const handlePageChange = (page: number) => {
    console.log(page);
  };

  return (
    <div className={styles.Container}>
      <div className={styles.Header}>
        {backAction && <Icons.ArrowPrev onClick={() => onBack?.()} className={styles.BackIcon} width='0.7rem' />}
        <span>{actionType === 'delete' ? translations?.deleteLabel : translations?.addLabel}</span>
      </div>
      {!labels?.length && !searchFieldValue.length ? (
        <span className={styles.NoLabels}>No labels are available</span>
      ) : (
        <>
          {searchAction && (
            <div className={styles.Search}>
              <div className={styles.SearchInputWrapper}>
                <input
                  type='text'
                  placeholder='Search'
                  className={styles.SearchInput}
                  value={searchFieldValue}
                  onChange={handleSearch}
                />
                <Icons.Search className={styles.SearchIcon} width='1.5rem' />
              </div>
              <div className={styles.Divider}></div>
            </div>
          )}

          {searchFieldValue.length && !labels.length ? (
            <span className={styles.NoLabels}>No labels were found.</span>
          ) : (
            <>
              <ScrollableView
                className={styles.LabelstList}
                height={150}
                onPageChange={handlePageChange}
                disableOnPageChange={false}>
                {labels?.map((label) => (
                  <LabelManagerTag
                    onClick={() => setSelectedId(label.id)}
                    key={label.id}
                    isActive={label.statusId}
                    labelText={label.labelText}
                    isBordered={label.isBordered}
                    isMinified={label.isMinified}
                    hasSuffixIcon={label.hasSuffixIcon}
                  />
                ))}
              </ScrollableView>
            </>
          )}

          <div className={styles.Footer}>
            <div className={styles.Loading}>{isGetLabelsLoading && <Icons.Spinner width='1.5rem' />}</div>
            <div
              onClick={() => selectedId && handleApply()}
              className={classNames(styles.Apply, {
                [styles['Apply--disabled']]: selectedId
              })}>
              {translations?.apply}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
