import { object, withKnobs } from '@storybook/addon-knobs';
import UserView from './UserView';

export default {
  title: 'components/organisms/User View',
  component: UserView,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <UserView
      userInfo={object('userInfo', {
        title: 'Username Ines254',
        id: 'ID 1234567',
        userName: 'Inesa Khachatryan',
        regInfo: 'Bet365'
      })}
    />
  );
};
