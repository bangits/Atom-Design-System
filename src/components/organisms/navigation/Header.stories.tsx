import { Header } from '@/components';
import { action } from '@storybook/addon-actions';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { Sidebar } from './Sidebar';

export default {
  component: Header,
  decorators: [withKnobs],
  title: 'components/organisms/Header'
};

export const Default = () => {
  return (
    <Header
      isOffline={boolean('isOffline', false)}
      dateConverter={(date) => date.toLocaleString()}
      speed={2}
      localTime={'Local Time'}
      money={number('money', 100000)}
      currency={text('currency', 'USD')}
      avatarProps={{
        dropdownLinks: [],

        bottomButtonLabel: 'Log Out',
        onBottomButtonClick: action('logOut'),

        avatarLabel: 'user_bangits@gmail.com',
        imageSource: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png'
      }}
      notificationProps={{
        quantity: 0
      }}
    />
  );
};
export const DefaultSidebar = () => {
  return (
    <Sidebar
      menuItems={[
        {
          label: 'Dashboard',
          isActive: true,
          subItems: [
            { label: 'Sub Menu Item', isActive: true },
            { label: 'Sub Menu Item' },
            { label: 'Sub Menu Item' },
            { label: 'Sub Menu Item' }
          ],
          icon: <></>
        }
      ]}
    />
  );
};
