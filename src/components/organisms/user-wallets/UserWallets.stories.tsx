import { Select } from '@my-ui/core';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import UserWallets from './UserWallets';

export default {
  title: 'components/organisms/User Wallets',
  component: UserWallets,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <UserWallets
      onDefaultWalletChange={action('onDefaultWalletChange')}
      tableLoadingRowIds={[2]}
      translations={{
        add: 'Add',
        default: 'Default',
        id: 'ID',
        other: 'Other',
        makeDefault: 'Make default'
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
  );
};
