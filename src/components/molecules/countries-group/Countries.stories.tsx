import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import Countries from './Countries';

export default {
  component: Countries,
  decorators: [withKnobs],
  title: 'components/molecules/Countries'
};

export const Default = () => {
  return <Countries />;
};
