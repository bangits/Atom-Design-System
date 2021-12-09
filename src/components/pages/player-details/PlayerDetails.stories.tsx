import { object, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import PlayerDetails from './PlayerDetails';

export default {
  title: 'components/pages/Player Details',
  component: PlayerDetails,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <PlayerDetails
      title=''
      userInfo={object('userInfo', {
        title: 'Username Ines254',
        id: 'ID 1234567',
        userName: 'Inesa Khachatryan',
        regInfo: 'Bet365'
      })}
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
      statusInfo={object('statusInfo', {
        label: 'Status',
        variant: 'active',
        statusLabel: 'Active'
      })}
      lastActivity={object('lastActivity', {
        title: 'Last Activity',
        info: [
          {
            label: 'Last login',
            date: '12.09.2021 12:08:03'
          },
          {
            label: 'Last game session',
            date: '12.09.2021 12:08:03'
          }
        ]
      })}
      breadCrumb={{
        links: [
          {
            label: 'Player Management',
            isRedirect: true
          },
          {
            label: 'Player Details'
          }
        ]
      }}
    />
  );
};
