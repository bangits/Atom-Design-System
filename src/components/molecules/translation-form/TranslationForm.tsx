import { Card, Scroll } from '@my-ui/core';
import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { Select, SelectProps } from '../select';
import styles from './TranslationForm.module.scss';

export interface TranslationFormProps {
  LanguageSelect: typeof Select;
  formContent: ReactNode;
  languageSelectProps?: SelectProps<any, any, any>;
  className?: string;
}

const TranslationForm = ({
  className,
  formContent,
  LanguageSelect,
  languageSelectProps = {}
}: TranslationFormProps) => {
  return (
    <Card className={(classNames(styles.TranslationFormCard), className)}>
      <LanguageSelect {...languageSelectProps} />
      <Scroll>
        <div className={styles.TranslationFormContent}>{formContent}</div>
      </Scroll>
    </Card>
  );
};

export default TranslationForm;
