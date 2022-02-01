import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import ChangePassword from './ChangePassword';

export default {
  component: ChangePassword,
  decorators: [withKnobs],
  title: 'components/organisms/ChangePassword'
};

export const Default = () => {
  return <ChangePassword />;
};
