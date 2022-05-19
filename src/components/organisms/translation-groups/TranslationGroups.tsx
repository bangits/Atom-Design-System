import { SearchInput, TranslationGroup, TranslationGroupProps } from '@/atom-design-system';
import { TextInput, Typography } from '@my-ui/core';
import React from 'react';

export type TranslationGroupsProps = TranslationGroupProps

const TranslationGroups = ({
  translationsGroups,
  onTranslationGroupSelect,
  selectedSubCategory
}: TranslationGroupsProps) => {
  return (
    <>
      {translationsGroups && translationsGroups.length ? <SearchInput /> : null}

      <TranslationGroup
        selectedSubCategory={selectedSubCategory}
        onTranslationGroupSelect={onTranslationGroupSelect}
        translationsGroups={translationsGroups}
      />
    </>
  );
};

export default TranslationGroups;
