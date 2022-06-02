import { Select } from '@my-ui/core';
import { number, text, withKnobs } from '@storybook/addon-knobs';
import TranslationForm from './TranslationForm';

export default {
  component: TranslationForm,
  decorators: [withKnobs],
  title: 'components/molecules/TranslationForm'
};

export const Default = () => {
  return <TranslationForm LanguageSelect={Select} formContent='formContent' />;
};
