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
  onTranslationGroupSelect(translationGroupId: number): void;
}

const TranslationGroup = ({
  translationsGroups,
  onTranslationGroupSelect,
  selectedSubCategory
}: TranslationGroupProps) => {
  const [selectedTranslationGroups, setSelectedTranslationGroups] = useState([]);

  useEffect(() => {
    if (!selectedSubCategory) setSelectedTranslationGroups([]);
  }, [selectedSubCategory]);

  return (
    <div className={classNames(styles.TranslationGroupContainer)}>
      {translationsGroups.map((translationGroup) => {
        const isTranslationGroupSelected = selectedTranslationGroups.includes(translationGroup.id);

        return (
          <div className={classNames(styles.TranslationGroupName)} key={translationGroup.id}>
            <div className={classNames(styles.TranslationGroupButtonContainer)}>{translationGroup.name}</div>
            <button
              className={classNames(styles.TranslationGroupButton)}
              onClick={() =>
                setSelectedTranslationGroups(
                  !isTranslationGroupSelected
                    ? [...selectedTranslationGroups, translationGroup.id]
                    : selectedTranslationGroups.filter((groupId) => groupId !== translationGroup.id)
                )
              }>
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
                    // className={classNames(styles.Translation, {
                    //   ['TranslationGroupCategories--selected']: selectedSubCategory === category.id
                    // })}
                    style={{
                      color: selectedSubCategory === category.id ? '#505D64' : '#C2C2DD',
                      background: selectedSubCategory === category.id ? '#C4C4C4' : 'none',
                      height: selectedSubCategory === category.id ? '21px' : '14px',
                      display: 'flex',
                      alignItems: 'center',
                      borderRadius: '4px',
                      fontSize: '14px',
                      marginBottom: '10px'
                    }}>
                    <div
                      key={category.id}
                      onClick={() => {
                        if (selectedSubCategory !== category.id) onTranslationGroupSelect(category.id);
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
