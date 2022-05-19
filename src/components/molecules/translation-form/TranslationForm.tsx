import { Form } from '@/atom-design-system';
import React, { ReactNode } from 'react';
import { Select, SelectProps } from '../select';

export interface TranslationFormProps {
  LanguageSelect: typeof Select;
  formContent: ReactNode;
  languageSelectProps?: SelectProps<any, any, any>;
}

const TranslationForm = ({ formContent, LanguageSelect, languageSelectProps = {} }: TranslationFormProps) => {
  return (
    <div>
      <LanguageSelect {...languageSelectProps} />

      {formContent}
    </div>
  );
};

export default TranslationForm;
