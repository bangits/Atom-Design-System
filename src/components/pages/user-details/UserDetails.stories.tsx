import { withKnobs } from '@storybook/addon-knobs';
import UserDetails from './UserDetails';

export default {
  title: 'components/pages/User Details',
  component: UserDetails,
  decorators: [withKnobs]
};

export const Default = () => {
  return <UserDetails />;
};
