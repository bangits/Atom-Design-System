import { useCallback, useState, useEffect, useRef, useMemo, ChangeEvent } from 'react';
import { Icons, ScrollableView } from '@/atom-design-system';
import { PrimaryKey, useActionsMessagesHandler, useTranslation } from '@atom/common';
import { useOutsideClickWithRef } from '@my-ui/core';
import classNames from 'classnames';
import styles from './LabelManager.module.scss';
import { LabelManagerTag, LabelManagerTagProps } from '../label-manager-tag';
import { useDebounce } from '@/helpers';

export type LabelManagerItem = Pick<
  LabelManagerTagProps,
  'isMinified' | 'isActive' | 'isBordered' | 'hasSuffixIcon'
> & {
  id: PrimaryKey;
  name?: string;
};
export interface LabelManagerProps {
  translations: {
    deleteLabel: string;
    addLabel: string;
    apply: string;
  };
  pageSize?: number;
  typeId: number;
  entityIds: PrimaryKey[];
  actionType: 'add' | 'delete';
  backAction?: boolean;
  onLabelClick?: (id: PrimaryKey, isSelected: boolean) => void;
  onBack?: () => void;
  onOutsideClick?: () => void;
  onSearch?: (value: string) => void;
  onApply?: (id: PrimaryKey, isSuccess: boolean) => void;
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
  translations,
  getAction: [getLabels, { isFetching: isGetLabelsLoading }],
  attachAction: [deleteLabels, { isLoading: isLabelDeleteLoading }],
  deleteAction: [attachToEntity, { isLoading: isLabelAttachLoading }],
  onOutsideClick,
  onLabelClick,
  onApply,
  labelsToDelete,
  pageSize = 5
}: LabelManagerProps) => {
  const t = useTranslation();
  const ref = useRef<HTMLDivElement | null>(null);
  const bulkActionMessageshandler = useActionsMessagesHandler();

  const [searchFieldValue, setSearchFieldValue] = useState<string | null>(null);
  const [debouncedSearchValue] = useDebounce(searchFieldValue, 300);
  const [disableOnPageChange, setDisableOnPageChange] = useState(false);
  const [labels, setLabels] = useState<LabelManagerItem[]>([]);
  const [selectedId, setSelectedId] = useState<PrimaryKey>();
  const [page, setPage] = useState(1);

  const labelsToDeleteWithoutCopies = useMemo(() => {
    const labelsHashMap = labelsToDelete?.reduce((prev, label) => {
      return !prev[label.id] ? { ...prev, [label.id]: label } : prev;
    }, {});

    return Object.values(labelsHashMap) as LabelManagerItem[];
  }, [labelsToDelete]);

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
    setSelectedId(null);
    setLabels(
      !searchFieldValue
        ? labelsToDeleteWithoutCopies
        : labelsToDeleteWithoutCopies.filter((label) => label.name.toLocaleLowerCase().includes(searchFieldValue))
    );
  }, [labelsToDeleteWithoutCopies, searchFieldValue]);

  const handleGlobalSearch = useCallback(async (): Promise<void> => {
    const { data } = await getLabels(
      {
        ids: entityIds,
        typeId,
        labelName: debouncedSearchValue,
        forExclude: false,
        pagination: {
          page: 1,
          pageSize
        }
      },
      false
    );
    setLabels(data.results);
    disableOnPageChange && setDisableOnPageChange(false);
    selectedId && setSelectedId(null);
  }, [entityIds, typeId, debouncedSearchValue, selectedId]);

  const handleSearchFieldChange = useCallback(({ target: { value } }) => {
    setSearchFieldValue(value);
  }, []);

  const handleApply = useCallback(() => {
    selectedId && (isActionAdd ? handleAttach() : handleDelete());
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
    (id: PrimaryKey) => {
      id === selectedId ? setSelectedId(null) : setSelectedId(id);
      onLabelClick?.(id, id === selectedId);
    },
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
            pageSize
          }
        },
        false
      );
      data.results?.length ? setLabels((prevValue) => [...prevValue, ...data.results]) : setDisableOnPageChange(true);
    },
    [entityIds, typeId, debouncedSearchValue]
  );

  const handlePageChange = useCallback(() => {
    if (isActionAdd) {
      setPage(page + 1);
      loadMoreLabels(page + 1);
    }
  }, [page, isActionAdd]);

  useOutsideClickWithRef(ref, () => onOutsideClick?.());

  useEffect(() => {
    !isActionAdd && handleLocalSearch();
  }, [isActionAdd, searchFieldValue]);

  useEffect(() => {
    isActionAdd && handleGlobalSearch();
  }, [debouncedSearchValue]);

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
                  placeholder={t.get('search')}
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
