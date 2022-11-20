import { Select, UserWallets } from '@/components';
import { action } from '@storybook/addon-actions';
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
      passwordContext={'Password Policy'}
      languagesContent={'Languages'}
      userWalletsContent={
        <UserWallets
          onDefaultWalletChange={action('onDefaultWalletChange')}
          onDefaultBallanceChange={action('onDefaultBallanceChange')}
          tableLoadingRowIds={[2]}
          translations={{
            add: 'Add',
            default: 'Default',
            id: 'ID',
            other: 'Other',
            makeDefault: 'Make default',
            balance: 'Balance',
            correctDefaultBalance: 'Correct Default Balance'
          }}
          wallets={[
            {
              balance: '150.000.000',
              currency: 'USD',
              id: 1,
              isDefault: true,
              currencyId: 1
            },
            {
              balance: '150.000.000',
              currency: 'AMD',
              id: 2,
              isDefault: false,
              currencyId: 2
            },
            {
              balance: '150.000.000',
              currency: 'RUB',
              id: 3,
              isDefault: false,
              currencyId: 3
            }
          ]}
          renderCurrenciesSelect={(changeOpenedCurrenciesSelect) => (
            <Select
              options={[
                {
                  label: 'USD',
                  value: 1
                },
                {
                  label: 'RUB',
                  value: 2
                }
              ]}
              onChange={() => changeOpenedCurrenciesSelect(false)}
            />
          )}
        />
      }
      createdBy={'11/11/1111'}
      creationDate={'2017-11/11'}
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
        link: 'Links',
        commissionPlan: 'Commission Plan',
        settings: 'Settings',
        passwordContext: 'Password Policy',
        languagesContent: 'Languages',
        generalInformation: 'General Information',
        lastLoginDate: 'Last Login Date',
        lastLoginIp: 'Last Login IP',
        registeredFormIp: 'Registered Form IP',
        status: 'Status',
        wallet: 'Wallet',
        projects: 'Projects',
        createdBy: 'CreatedBy',
        creationDate: 'CreationDate'
      }}
      userName='Inesa Khachatryan'
      userId='ID 1234567'
      userImgUrl=''
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
