import { withKnobs } from '@storybook/addon-knobs';
import DialogView from './DialogView';

export default {
  component: DialogView,
  decorators: [withKnobs],
  title: 'components/molecules/DialogView'
};

export const Default = () => {
  return <>{/* <DialogView /> */}</>;
};
