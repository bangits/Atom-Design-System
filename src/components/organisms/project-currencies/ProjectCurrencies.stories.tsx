import { Select } from '@my-ui/core';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import ProjectCurrencies from './ProjectCurrencies';

export default {
  title: 'components/organisms/Project Currencies',
  component: ProjectCurrencies,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <ProjectCurrencies
      renderLanguagesSelect={(changeOpenedCustomSelect) => (
        <Select
          options={[
            {
              label: 'AMD',
              value: 1
            },
            {
              label: 'USD',
              value: 2
            },
            {
              label: 'RUB',
              value: 3
            }
          ]}
          onChange={() => changeOpenedCustomSelect(false)}
        />
      )}
      translations={{
        add: 'Add',
        default: 'Default',
        supported: 'Supported',
        tableHeaders: {
          currencyCode: 'Currency Code',
          currencyName: 'Currency Name',
          type: 'Type'
        }
      }}
      tableLoadingRowIds={['RUB']}
      shouldShowAddWalletButton
      currencies={[
        {
          currencyCode: 'AMD',
          currencyName: 'Armenian Dram',
          isDefault: true
        },
        {
          currencyCode: 'USD',
          currencyName: 'United States Dollar',
          isDefault: false
        },
        {
          currencyCode: 'RUB',
          currencyName: 'Russian Ruble',
          isDefault: false
        }
      ]}
    />
  );
};
