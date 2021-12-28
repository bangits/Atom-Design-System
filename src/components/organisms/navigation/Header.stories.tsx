import { Header } from '@/components';
import { action } from '@storybook/addon-actions';
import { number, text, withKnobs } from '@storybook/addon-knobs';

export default {
  component: Header,
  decorators: [withKnobs],
  title: 'components/organisms/Header'
};

export const Default = () => {
  return (
    <Header
      speed={2}
      localTime={{
        label: 'Local Time',
        text: '12/27/2021/6:52'
      }}
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
