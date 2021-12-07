import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import CountView from './CountView';

export default {
  component: CountView,
  decorators: [withKnobs],
  title: 'components/molecules/CountView'
};

export const Default = () => {
  return <CountView />;
};
