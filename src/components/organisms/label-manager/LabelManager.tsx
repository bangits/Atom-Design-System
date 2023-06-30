import { Typography } from '@my-ui/core';
import styles from './LabelManager.module.scss';
import { Icons, ScrollableView } from '@/atom-design-system';
import { PrimaryKey } from '@atom/common';
import { useState } from 'react';
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
  actionType: 'add' | 'delete';
  backAction?: boolean;
  searchAction?: boolean;
  onBack?: () => void;
  onSearch?: (value: string) => void;
  onApply?: () => void;
  onSelect: () => void;
  labelsList: LabelManagerItem[];
}

export const LabelManager = ({
  backAction,
  onBack,
  actionType,
  searchAction,
  translations,
  onSelect,
  onApply,
  labelsList
}: LabelManagerProps) => {
  const [searchFieldValue, setSearchFieldValue] = useState('');

  return (
    <div className={styles.Container}>
      <div className={styles.Header}>
        {backAction && <Icons.ArrowPrev onClick={() => onBack?.()} className={styles.BackIcon} width='0.7rem' />}
        <span>{actionType === 'delete' ? translations?.deleteLabel : translations?.addLabel}</span>
      </div>
      {!labelsList.length && !searchFieldValue.length ? (
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
                  onChange={(e) => setSearchFieldValue(e.target.value)}
                />
                <Icons.Search className={styles.SearchIcon} width='1.5rem' />
              </div>
              <div className={styles.Divider}></div>
            </div>
          )}

          {searchFieldValue.length && !labelsList.length ? (
            <span className={styles.NoLabels}>No labels were found.</span>
          ) : (
            <>
              <ScrollableView
                className={styles.LabelstList}
                height={120}
                onPageChange={() => {}}
                disableOnPageChange={false}>
                {labelsList?.map((label) => (
                  <LabelManagerTag
                    onClick={onSelect}
                    key={label.id}
                    isActive={label.isActive}
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
            <div onClick={onApply} className={styles.Apply}>
              {translations?.apply}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
