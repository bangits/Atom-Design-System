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
          balance: '21 300 AMD',
          subBalance: [
            { label: 'Casino', balance: '10 300 AMD' },
            { label: 'Sport', balance: '11 000 AMD' }
          ]
        },
        bonusBalance: {
          label: 'Bonus Balance',
          balance: '123 AMD'
        },
        totalBalance: {
          label: 'Total Balance',
          balance: '21 423 AMD'
        }
      })}
    />
  );
};
