import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import DetailsMainInfo from './DetailsMainInfo';

export default {
  component: DetailsMainInfo,
  decorators: [withKnobs],
  title: 'components/molecules/DetailsMainInfo'
};

export const Default = () => {
  return <DetailsMainInfo />;
};
