import { CloseWidePopUp } from '@/icons';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import styles from './TranslationGroup.module.scss';

export interface TranslationGroupInterface {
  id: number;
  name: string;
}

export interface TranslationGroupProps {
  translationsGroups: ({
    subCategories: TranslationGroupInterface[];
  } & TranslationGroupInterface)[];
  selectedSubCategory: number;
  searchValue: string;
  onTranslationGroupSelect(translationGroup: TranslationGroupInterface): void;
}

const TranslationGroup = ({
  translationsGroups,
  onTranslationGroupSelect,
  selectedSubCategory,
  searchValue
}: TranslationGroupProps) => {
  const [selectedTranslationGroups, setSelectedTranslationGroups] = useState([]);

  useEffect(() => {
    if (!selectedSubCategory) setSelectedTranslationGroups([]);
  }, [selectedSubCategory]);

  useEffect(() => {
    if (searchValue.trim()) setSelectedTranslationGroups(translationsGroups.map((group) => group.id));
  }, [searchValue]);

  return (
    <div className={classNames(styles.TranslationGroupContainer)}>
      {translationsGroups.map((translationGroup) => {
        const isTranslationGroupSelected = selectedTranslationGroups.includes(translationGroup.id);

        return (
          <div className={classNames(styles.TranslationGroupName)} key={translationGroup.id}>
            <div
              onClick={() =>
                setSelectedTranslationGroups(
                  !isTranslationGroupSelected
                    ? [...selectedTranslationGroups, translationGroup.id]
                    : selectedTranslationGroups.filter((groupId) => groupId !== translationGroup.id)
                )
              }
              className={classNames(styles.TranslationGroupButtonContainer)}>
              {translationGroup.name}
            </div>
            <button
              onClick={() =>
                setSelectedTranslationGroups(
                  !isTranslationGroupSelected
                    ? [...selectedTranslationGroups, translationGroup.id]
                    : selectedTranslationGroups.filter((groupId) => groupId !== translationGroup.id)
                )
              }
              className={classNames(styles.TranslationGroupButton)}>
              {isTranslationGroupSelected ? (
                <svg viewBox='0 0 8 2' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M7.17952 1.07106L7.17952 0.359008L4.35604 0.359008H3.64399L0.820508 0.359008L0.820508 1.07106L3.64399 1.07106H4.35604L7.17952 1.07106Z'
                    fill='#6667AB'
                  />
                </svg>
              ) : (
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 7 7' fill='none'>
                  <path
                    d='M6.71503 3.89156V3.1795H3.89155V0.356028H3.17949V3.1795H0.356015V3.89156H3.17949V6.71504H3.89155V3.89156H6.71503Z'
                    fill='#6667AB'
                  />
                </svg>
              )}
            </button>
            {isTranslationGroupSelected && (
              <div className={styles.TranslationSubCategories}>
                {translationGroup.subCategories.map((category) => (
                  <div
                    className={classNames(styles.Translation, {
                      ['Translation--selected']: selectedSubCategory === category.id
                    })}
                    style={{
                      color: selectedSubCategory === category.id ? '#48485D' : '#8ea6c1',
                      backgroundColor: selectedSubCategory === category.id ? '#EBEBF4' : 'white'
                    }}>
                    <div
                      key={category.id}
                      onClick={() => {
                        if (selectedSubCategory !== category.id) onTranslationGroupSelect(category);
                      }}
                      className={styles.TranslationCategoryName}>
                      {category.name}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TranslationGroup;
