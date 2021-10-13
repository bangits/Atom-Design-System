import { withKnobs } from '@storybook/addon-knobs';
import PasswordInput from './PasswordInput';

export default {
  component: PasswordInput,
  decorators: [withKnobs],
  title: 'components/molecules/Password Input'
};

export const Default = () => {
  return <PasswordInput />;
};
