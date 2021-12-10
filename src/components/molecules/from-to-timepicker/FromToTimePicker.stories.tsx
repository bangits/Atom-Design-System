import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import FromToTimePicker from './FromToTimePicker';

export default {
  component: FromToTimePicker,
  decorators: [withKnobs],
  title: 'components/molecules/From To TimePicker'
};

export const Default = () => {
  return <FromToTimePicker onChange={action('onChange')} />;
};
