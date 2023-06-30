import { useCallback, useState, useMemo } from 'react';
import { PrimaryKey, useItemsList } from '@atom/common';
import { Icons, ScrollableView } from '@/atom-design-system';
import styles from './LabelManager.module.scss';
import { LabelManagerTag } from '../label-manager-tag';

export interface LabelManagerItem {
  isMinified?: boolean;
  id: PrimaryKey;
  labelText?: string;
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
  isLoading: boolean;
  isMultiSelect?: boolean;
  isSearchLocal?: boolean;
  actionType: 'add' | 'delete';
  backAction?: boolean;
  searchAction?: boolean;
  onLabelClick: (id: PrimaryKey, isSelected) => void;
  onBack?: () => void;
  onSearch?: (value: string) => void;
  onApply?: (ids: PrimaryKey[]) => void;
  labelsList: LabelManagerItem[];
}

export const LabelManager = ({
  backAction,
  onBack,
  isSearchLocal,
  actionType,
  searchAction,
  translations,
  onLabelClick,
  onApply,
  isMultiSelect,
  labelsList,
  isLoading
}: LabelManagerProps) => {
  const [searchFieldValue, setSearchFieldValue] = useState('');
  const [localSearchList, setLocalSearchList] = useState(labelsList.concat([]));

  const { selectedItemIds, setSelectedItemIds, createToggleItem, checkItemIsSelected } = useItemsList();

  const handleLabelClick = useCallback(
    (id: PrimaryKey) => {
      isMultiSelect ? handleMultiSelect(id) : handleSingleSelect(id);
    },
    [isMultiSelect, createToggleItem]
  );

  const handleMultiSelect = useCallback(
    (id: PrimaryKey) => {
      const changedSelectedIds = checkItemIsSelected(id)
        ? selectedItemIds.filter((item) => item !== id)
        : [...selectedItemIds, id];

      setSelectedItemIds(changedSelectedIds);
      onLabelClick?.(id, !checkItemIsSelected(id));
    },
    [checkItemIsSelected, selectedItemIds, onLabelClick]
  );

  const handleSingleSelect = useCallback(
    (id: PrimaryKey) => {
      const changedSelectedIds = checkItemIsSelected(id) ? [] : [id];

      setSelectedItemIds(changedSelectedIds);
      onLabelClick?.(id, !checkItemIsSelected(id));
    },
    [checkItemIsSelected, onLabelClick]
  );

  const handleSearch = useCallback(
    (e) => {
      setSearchFieldValue(e.target.value);

      if (isSearchLocal) {
        const searchResults = !e.target.value
          ? labelsList.concat([])
          : localSearchList.filter((item) => item.labelText.includes(e.target.value));

        setLocalSearchList(searchResults);
      }
    },
    [isSearchLocal]
  );

  const labels = useMemo(
    () => (isSearchLocal ? localSearchList : labelsList),
    [isSearchLocal, localSearchList, labelsList]
  );

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
                    onClick={() => handleLabelClick(label.id)}
                    key={label.id}
                    isSelected={checkItemIsSelected(label.id)}
                    isActive={label.isActive}
                    labelText={label.labelText}
                    isBordered={label.isBordered}
                    isMinified={label.isMinified}
                    hasSuffixIcon={label.hasSuffixIcon}
                    hasCheckBox={isMultiSelect}
                  />
                ))}
              </ScrollableView>
            </>
          )}

          <div className={styles.Footer}>
            <div className={styles.Loading}>{isLoading && <Icons.Spinner width='1.5rem' />}</div>
            <div onClick={() => onApply(selectedItemIds)} className={styles.Apply}>
              {translations?.apply}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
