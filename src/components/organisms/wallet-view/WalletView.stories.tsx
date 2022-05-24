import { object, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import WalletView from './WalletView';

export default {
  title: 'components/organisms/Wallet View',
  component: WalletView,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <WalletView
      walletInfo={object('walletInfo', {
        title: 'Wallet',
        realBalance: {
          label: 'Real Balance',
          balance: '21 300',
          currencyLabel: 'USD'
        }
      })}
    />
  );
};
