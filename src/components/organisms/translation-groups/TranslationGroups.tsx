import { SearchInput, SearchInputProps, TranslationGroup, TranslationGroupProps } from '../../';
import { TextInput, Typography } from '@my-ui/core';
import React, { useMemo, useState } from 'react';
import styles from './TranslationGroups.module.scss';

export interface TranslationGroupsProps extends TranslationGroupProps {
  searchInputProps?: SearchInputProps;
}

const TranslationGroups = ({
  translationsGroups,
  onTranslationGroupSelect,
  selectedSubCategory,
  searchInputProps
}: TranslationGroupsProps) => {
  const [searchValue, setSearchValue] = useState('');

  const translationGroupsSearched = useMemo(
    () =>
      searchValue.trim()
        ? translationsGroups.filter(
            (group) =>
              group.name.includes(searchValue.trim()) ||
              group.subCategories.find((subCategory) => subCategory.name.includes(searchValue.trim()))
          )
        : translationsGroups,
    [translationsGroups, searchValue]
  );

  return (
    <div className={styles.translationGroups}>
      {translationsGroups && translationsGroups.length ? (
        <SearchInput {...searchInputProps} onChange={(e) => setSearchValue(e.target.value)} />
      ) : null}

      <TranslationGroup
        selectedSubCategory={selectedSubCategory}
        onTranslationGroupSelect={onTranslationGroupSelect}
        translationsGroups={translationGroupsSearched}
        searchValue={searchValue}
      />
    </div>
  );
};

export default TranslationGroups;
