import { useCallback, useState, useEffect, useRef, useMemo } from 'react';
import { Icons, ScrollableView } from '@/atom-design-system';
import { PrimaryKey, useActionsMessagesHandler, useTranslation } from '@atom/common';
import { useOutsideClickWithRef } from '@my-ui/core';
import classNames from 'classnames';
import styles from './LabelManager.module.scss';
import { LabelManagerTag } from '../label-manager-tag';
import { useDebounce } from '@/helpers';

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

const pageSize = 5;

export const LabelManager = ({
  backAction,
  onBack,
  actionType,
  typeId,
  entityIds,
  translations,
  getAction,
  onOutsideClick,
  deleteAction,
  attachAction,
  onApply,
  labelsToDelete
}: LabelManagerProps) => {
  const t = useTranslation();
  const ref = useRef<HTMLDivElement | null>(null);
  const bulkActionMessageshandler = useActionsMessagesHandler();

  const [getLabels, { isFetching: isGetLabelsLoading }] = getAction;
  const [deleteLabels, { isLoading: isLabelDeleteLoading }] = deleteAction;
  const [attachToEntity, { isLoading: isLabelAttachLoading }] = attachAction;

  const [searchFieldValue, setSearchFieldValue] = useState(null);
  const [debouncedSearchValue] = useDebounce(searchFieldValue, 300);
  const [disableOnPageChange, setDisableOnPageChange] = useState(false);
  const [labels, setLabels] = useState([]);
  const [selectedId, setSelectedId] = useState<PrimaryKey>();
  const [page, setPage] = useState(1);

  const isLoading = useMemo(
    () => isGetLabelsLoading || isLabelAttachLoading || isLabelDeleteLoading,
    [isGetLabelsLoading, isLabelAttachLoading, isLabelDeleteLoading]
  );

  const isSearchResultEmpty = useMemo(() => searchFieldValue !== null && !labels.length, [searchFieldValue, labels]);

  const isActionAdd = useMemo(() => actionType === 'add', [actionType]);

  const showSearchBar = useMemo(
    () => labels.length > 1 || (labels.length < 2 && (searchFieldValue !== null || !!debouncedSearchValue)),
    [labels, searchFieldValue, debouncedSearchValue]
  );

  const areAvailableLabelsMissing = useMemo(
    () => isActionAdd && !debouncedSearchValue && !searchFieldValue && page === 1 && !labels.length && !isLoading,
    [page, debouncedSearchValue, searchFieldValue, isActionAdd, labels]
  );

  const handleLocalSearch = useCallback(() => {
    if (!isActionAdd) {
      setSelectedId(null);
      !searchFieldValue
        ? setLabels(labelsToDelete)
        : setLabels(labelsToDelete.filter((label) => label.name.toLocaleLowerCase().includes(searchFieldValue)));
    }
  }, [labelsToDelete, searchFieldValue, isActionAdd]);

  const handleGlobalSearch: any = useCallback(async () => {
    if (isActionAdd) {
      const { data } = await getLabels(
        {
          ids: entityIds,
          typeId,
          labelName: debouncedSearchValue,
          forExclude: false,
          pagination: {
            page: 1,
            pageSize: pageSize
          }
        },
        false
      );
      setLabels(data.results);
      disableOnPageChange && setDisableOnPageChange(false);
      selectedId && setSelectedId(null);
    }
  }, [entityIds, typeId, debouncedSearchValue, selectedId, isActionAdd]);

  const handleSearchFieldChange = useCallback(
    (e) => {
      const value = e.target.value;
      setSearchFieldValue(value);
    },
    [labelsToDelete]
  );

  const handleApply = useCallback(() => {
    isActionAdd ? handleAttach() : handleDelete();
  }, [actionType, selectedId, isActionAdd]);

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
        bulkActionMessageshandler({ actionsResults });
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
        bulkActionMessageshandler({ actionsResults });
        onApply?.(selectedId, !!actionsResults.successCount);
      });
  }, [typeId, selectedId, entityIds]);

  const handleLabelClick = useCallback(
    (id: PrimaryKey) => (id === selectedId ? setSelectedId(null) : setSelectedId(id)),
    [selectedId]
  );

  const loadMoreLabels = useCallback(
    async (pageNumber: number) => {
      const { data } = await getLabels(
        {
          ids: entityIds,
          typeId,
          labelName: debouncedSearchValue,
          forExclude: false,
          pagination: {
            page: pageNumber,
            pageSize: pageSize
          }
        },
        false
      );
      !data.results?.length && setDisableOnPageChange(true);
      data.results?.length && setLabels((prevValue) => [...prevValue, ...data.results]);
    },
    [entityIds, typeId, debouncedSearchValue]
  );

  const handlePageChange = useCallback(
    (newPage) => {
      console.log(newPage);

      if (isActionAdd) {
        setPage(page + 1);
        loadMoreLabels(page + 1);
      }
    },
    [page, isActionAdd]
  );

  useOutsideClickWithRef(ref, () => onOutsideClick?.());

  useEffect(() => handleLocalSearch(), [searchFieldValue]);

  useEffect(() => handleGlobalSearch(), [debouncedSearchValue]);

  return (
    <div className={styles.Container} ref={ref}>
      <div className={styles.Header}>
        {backAction && <Icons.ArrowPrev onClick={() => onBack?.()} className={styles.BackIcon} width='0.7rem' />}
        <span>{!isActionAdd ? translations?.deleteLabel : translations?.addLabel}</span>
      </div>
      {areAvailableLabelsMissing ? (
        <span className={styles.NoLabels}>{t.get('noAvailableLabels')}</span>
      ) : (
        <>
          {showSearchBar && (
            <div className={styles.Search}>
              <div className={styles.SearchInputWrapper}>
                <input
                  maxLength={20}
                  type='text'
                  placeholder='Search'
                  className={styles.SearchInput}
                  value={searchFieldValue || ''}
                  onChange={handleSearchFieldChange}
                />
                <Icons.Search className={styles.SearchIcon} width='1.5rem' />
              </div>
              <div className={styles.Divider}></div>
            </div>
          )}

          {isSearchResultEmpty ? (
            <span className={styles.NoLabels}>{t.get('noLabelsFound')}</span>
          ) : (
            <>
              <ScrollableView
                className={styles.LabelstList}
                height={150}
                onPageChange={handlePageChange}
                disableOnPageChange={isGetLabelsLoading || disableOnPageChange}>
                {labels?.map((label: LabelManagerItem) => (
                  <div className={styles.LabelListItem}>
                    <LabelManagerTag
                      key={label.id}
                      isSelected={selectedId === label.id}
                      isActive={label.isActive}
                      labelText={label.name}
                      isBordered={label.isBordered}
                      isMinified={label.isMinified}
                      hasSuffixIcon={label.hasSuffixIcon}
                      onClick={() => handleLabelClick(label.id)}
                    />
                  </div>
                ))}
              </ScrollableView>
            </>
          )}

          <div className={styles.Footer}>
            <div className={styles.Loading}>{isLoading && <Icons.Spinner width='1.5rem' />}</div>
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
