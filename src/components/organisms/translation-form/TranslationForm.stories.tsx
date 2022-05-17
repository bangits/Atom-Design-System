import { ProductsIcon } from '@/icons';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import TranslationForm from './TranslationForm';

export default {
  component: TranslationForm,
  decorators: [withKnobs],
  title: 'components/organisms/TranslationForm'
};

export const Default = () => {
  return <TranslationForm value='kljflksdjfk' />;
};
