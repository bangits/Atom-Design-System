import { useCallback, useState, useMemo, useEffect } from 'react';
import { PrimaryKey, useActionsMessagesHandler } from '@atom/common';
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
  onApply?: (id: PrimaryKey, isSuccess: boolean) => void;
  onSufficIconClick?: (id: PrimaryKey) => void;
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
  const handler = useActionsMessagesHandler();

  const [getLabels, { data, isFetching: isGetLabelsLoading }] = getAction;
  const [deleteLabels] = deleteAction;
  const [attachToEntity] = attachAction;

  const [searchFieldValue, setSearchFieldValue] = useState('');
  const [localSearchList, setLocalSearchList] = useState(labelsToDelete?.concat([]) || []);
  const [selectedId, setSelectedId] = useState<PrimaryKey>();
  const [page, setPage] = useState(1);

  const handleSearch = useCallback(
    (e) => {
      setSearchFieldValue(e.target.value);
      if (labelsToDelete) {
        const searchResults = !e.target.value
          ? labelsToDelete.concat([])
          : localSearchList.filter((item) => item.labelText.includes(e.target.value));
        setLocalSearchList(searchResults);
      } else {
        getLabels();
      }
    },
    [labelsToDelete, localSearchList]
  );

  const labels = useMemo(
    () =>
      actionType === 'add'
        ? data?.results?.map((label) => ({
            id: label.id,
            labelText: label.name,
            statusId: label.statusId === 2 ? false : true
          }))
        : localSearchList,
    [actionType, localSearchList, data]
  );

  const handleApply = useCallback(() => {
    actionType === 'add' ? handleAttach() : handleDelete();
  }, [actionType, selectedId]);

  const handleAttach = useCallback(() => {
    attachToEntity({
      assignLabelToEntityRequestModel: {
        ids: entityIds,
        labelId: selectedId
      },
      typeId
    })
      .unwrap()
      .then((actionsResults) => {
        handler({ actionsResults });
        onApply?.(selectedId, !!actionsResults.successCount);
      });
  }, [entityIds, entityIds, selectedId]);

  const handleDelete = useCallback(() => {
    deleteLabels({
      ids: entityIds,
      labelId: selectedId,
      typeId
    })
      .unwrap()
      .then((actionsResults) => {
        handler({ actionsResults });
        onApply?.(selectedId, !!actionsResults.successCount);
      });
  }, [typeId, selectedId, entityIds]);

  const handleLabelClick = useCallback(
    (id: PrimaryKey) => {
      id === selectedId ? setSelectedId(null) : setSelectedId(id);
    },
    [selectedId]
  );

  const handleSuffixIconClick = useCallback((id: PrimaryKey) => {}, [selectedId]);

  const handlePageChange = useCallback((page: number) => {
    console.log(page + 1);
    setPage(page + 1);
    fetchLabels();
  }, []);

  const fetchLabels = useCallback(() => {
    getLabels({
      ids: entityIds,
      typeId,
      forExclude: false,
      pagination: {
        page: page,
        pageSize: 5
      }
    });
  }, [entityIds, typeId]);

  useEffect(() => {
    fetchLabels();
  }, []);

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
                    key={label.id}
                    isSelected={selectedId === label.id}
                    isActive={label.statusId}
                    labelText={label.labelText}
                    isBordered={label.isBordered}
                    isMinified={label.isMinified}
                    hasSuffixIcon={label.hasSuffixIcon}
                    onSufficIconClick={() => handleSuffixIconClick(label.id)}
                    onClick={() => handleLabelClick(label.id)}
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
                [styles['Apply--disabled']]: !selectedId
              })}>
              {translations?.apply}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
