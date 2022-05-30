import { SearchInput, SearchInputProps, TranslationForm, TranslationFormProps } from '@/atom-design-system';
import { Typography } from '@my-ui/core';
import React from 'react';
import styles from './TranslationForms.module.scss';

export interface TranslationFormsProps {
  title: string;
  searchInputProps?: SearchInputProps;
  firstTranslationFormProps: TranslationFormProps;
  secondTranslationFormProps: TranslationFormProps;
}

const TranslationForms = ({
  title,
  searchInputProps = {},
  firstTranslationFormProps,
  secondTranslationFormProps
}: TranslationFormsProps) => {
  return (
    <>
      <div className={styles.TranslationForm}>
        <Typography className={styles.TranslationFormTitle}>{/* {title} */}</Typography>
        <div className={styles.TranslationFormSearchInputContainer}>
          <SearchInput className={styles.TranslationFormSearchInput} {...searchInputProps} />
        </div>
      </div>

      <div className={styles.TranslationFormsCards}>
        <TranslationForm className={styles.FirstTranslationFormProps} {...firstTranslationFormProps} />
        <TranslationForm className={styles.SecondTranslationFormProps} {...secondTranslationFormProps} />
      </div>
    </>
  );
};

export default TranslationForms;
