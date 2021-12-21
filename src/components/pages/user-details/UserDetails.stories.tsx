import { object, withKnobs } from '@storybook/addon-knobs';
import UserDetails from './UserDetails';

export default {
  title: 'components/pages/User Details',
  component: UserDetails,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <UserDetails
      breadCrumbs={[
        {
          label: 'User Managment',
          isRedirect: true
        },
        {
          label: 'User Details'
        }
      ]}
      translations={{
        generalInformation: 'General Information',
        lastLoginDate: 'Last Login Date',
        lastLoginIp: 'Last Login IP',
        registeredFormIp: 'Registered Form IP',
        status: 'Status',
        wallet: 'Wallet',
        projects: 'Projects',
      }}
      userName='Inesa Khachatryan'
      userId='ID 1234567'
      userImgUrl='https://www.1tv.am/images/video/5/24776/5.jpeg'
      statusInfo={object('statusInfo', {
        label: 'Status',
        variant: 'active',
        statusLabel: 'Active'
      })}
      lastLoginDate='12/01/2021'
      registeredFormIp='192.158.1.38'
      lastLoginIp='192.158.1.38'
      generalInformationContext={<>General Information</>}
    />
  );
};
