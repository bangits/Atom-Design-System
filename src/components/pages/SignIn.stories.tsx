import { withKnobs } from '@storybook/addon-knobs';
import SignIn from './SignIn';

export default {
  component: SignIn,
  decorators: [withKnobs],
  title: 'components/pages/Sign In'
};

export const Default = () => {
  return <SignIn />;
};
