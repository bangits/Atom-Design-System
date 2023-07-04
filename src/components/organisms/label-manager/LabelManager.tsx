import { useCallback, useState, useEffect, useRef } from 'react';
import { PrimaryKey, useActionsMessagesHandler } from '@atom/common';
import { Icons, ScrollableView } from '@/atom-design-system';
import styles from './LabelManager.module.scss';
import { LabelManagerTag } from '../label-manager-tag';
import classNames from 'classnames';
import { useOutsideClickWithRef } from '@my-ui/core';

export interface LabelManagerItem {
  isMinified?: boolean;
  id: PrimaryKey;
  name?: string;
  isActive?: boolean;
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
  onOutsideClick?: () => void;
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
  onOutsideClick,
  deleteAction,
  attachAction,
  onApply,
  labelsToDelete
}: LabelManagerProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const handler = useActionsMessagesHandler();

  const [getLabels, { isFetching: isGetLabelsLoading }] = getAction;
  const [deleteLabels] = deleteAction;
  const [attachToEntity] = attachAction;

  const [searchFieldValue, setSearchFieldValue] = useState('');
  const [disableOnPageChange, setDisableOnPageChange] = useState(false);
  const [labels, setLabels] = useState([]);
  const [selectedId, setSelectedId] = useState<PrimaryKey>();
  const [page, setPage] = useState(1);

  const handleSearch = useCallback((e) => {}, [labelsToDelete]);

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

  const handlePageChange = useCallback(
    (page: number) => {
      setPage(page + 1);
      computeLabelsList();
    },
    [page]
  );

  const computeLabelsList = useCallback(async () => {
    if (actionType === 'add') {
      const { data } = await getLabels({
        ids: entityIds,
        typeId,
        forExclude: false,
        pagination: {
          page: page,
          pageSize: 5
        }
      });
      !data.results.length && setDisableOnPageChange(true);
      setLabels((prevState) => [...prevState, ...data.results]);
    } else {
      setLabels(labelsToDelete);
    }
  }, [entityIds, typeId, page, labelsToDelete, actionType]);

  useEffect(() => {
    computeLabelsList();
  }, []);

  useOutsideClickWithRef(ref, () => onOutsideClick?.());

  return (
    <div className={styles.Container} ref={ref}>
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
                  maxLength={20}
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
                disableOnPageChange={disableOnPageChange}>
                {labels?.map((label: LabelManagerItem) => (
                  <LabelManagerTag
                    key={label.id}
                    isSelected={selectedId === label.id}
                    isActive={label.isActive}
                    labelText={label.name}
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
