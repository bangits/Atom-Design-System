import { Select } from '@my-ui/core';
import { withKnobs } from '@storybook/addon-knobs';
import TranslationForms from './TranslationForms';

export default {
  title: 'components/organisms/TranslationForms',
  component: TranslationForms,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <TranslationForms
      title='Report By Providers'
      firstTranslationFormProps={{
        LanguageSelect: Select,
        formContent: 'Form Content'
      }}
      secondTranslationFormProps={{
        LanguageSelect: Select,
        formContent: 'Form Content'
      }}
    />
  );
};
