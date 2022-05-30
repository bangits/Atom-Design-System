import { TranslationGroupInterface } from '@/components/molecules/translation-group/TranslationGroup';
import { Select, SelectProps } from '@my-ui/core';
import { Tree } from '@my-ui/core/dist/interfaces';
import React, { useCallback, useMemo } from 'react';
import { TranslationGroupProps } from '../../';
import styles from './TranslationGroups.module.scss';
export interface TranslationGroupsProps extends TranslationGroupProps {
  // searchInputProps?: SearchInputProps;
  selectProps?: SelectProps<any, any, any>;
}

const TranslationGroups = ({
  translationsGroups,
  onTranslationGroupSelect,
  selectedSubCategory,
  // searchInputProps,
  selectProps = {}
}: TranslationGroupsProps) => {
  // const [searchValue, setSearchValue] = useState('');

  // const translationGroupsSearched = useMemo(
  //   () =>
  //     searchValue.trim()
  //       ? translationsGroups.filter(
  //           (group) =>
  //             group.name.includes(searchValue.trim()) ||
  //             group.subCategories.find((subCategory) => subCategory.name.includes(searchValue.trim()))
  //         )
  //       : translationsGroups,
  //   [translationsGroups, searchValue]
  // );

  const transformSubCategoryToTree = useCallback(
    (translationGroup: typeof translationsGroups[number]) => ({
      ...translationGroup,
      children: translationGroup.subCategories.length
        ? translationGroup.subCategories.map((category) => transformSubCategoryToTree(category))
        : translationGroup.subCategories
    }),
    []
  );

  const treeData = useMemo<Tree[]>(() => translationsGroups.map(transformSubCategoryToTree), [translationsGroups]);
  const allGroups = useMemo<TranslationGroupInterface[]>(() => {
    const parseSubCategories = (groups) =>
      groups.map((group) => {
        return { ...group, ...(group.subCategories.length ? [parseSubCategories(group.subCategories)] : []) };
      });

    return parseSubCategories(translationsGroups).flat(Infinity);
  }, [translationsGroups]);

  return translationsGroups.length ? (
    <div className={styles.SelectContainer}>
      <Select
        {...selectProps}
        isSearchable
        isTree
        treeData={treeData}
        onChange={(selectedGroup) => onTranslationGroupSelect(allGroups.find((group) => group.id === selectedGroup))}
      />
    </div>
  ) : null; // <div className={styles.translationGroups}>
  //   {translationsGroups && translationsGroups.length ? (
  //     <SearchInput {...searchInputProps} onChange={(e) => setSearchValue(e.target.value)} />
  //   ) : null}

  //   <TranslationGroup
  //     selectedSubCategory={selectedSubCategory}
  //     onTranslationGroupSelect={onTranslationGroupSelect}
  //     translationsGroups={translationGroupsSearched}
  //     searchValue={searchValue}
  //   />
  // </div>
};

export default TranslationGroups;
