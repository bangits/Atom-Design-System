import { object, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import GameDetails from './GameDetails';

export default {
  title: 'components/pages/Game Details',
  component: GameDetails,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <GameDetails
      userInfo={object('userInfo', {
        title: 'Username Ines254',
        id: 'ID 1234567',
        userName: 'Inesa Khachatryan',
        regInfo: 'Bet365'
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
      docInfo={{
        data: [
          { name: 'Creation Date', description: '09/05/2021 12:00:00' },
          { name: 'Created By', description: 'Inesa Khachatrian' },
          { name: 'Last Updated Date', description: '09/05/2021 12:00:00' },
          { name: 'Last Updateb By', description: 'Inesa Khachatrian' }
        ]
      }}
      breadCrumb={{
        links: [
          {
            label: 'Game Management',
            isRedirect: true
          },
          {
            label: '"Shining Crown" game details'
          }
        ]
      }}
    />
  );
};
