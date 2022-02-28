import { Select } from '@my-ui/core';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import UserLanguages from './UserLanguages';

export default {
  title: 'components/organisms/User Wallets',
  component: UserLanguages,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <UserLanguages
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
      renderLanguagesSelect={(changeOpenedLanguagesSelect) => (
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
          onChange={() => changeOpenedLanguagesSelect(false)}
        />
      )}
    />
  );
};
