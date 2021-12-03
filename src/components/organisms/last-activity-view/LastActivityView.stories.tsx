import { object, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import LastActivityView from './LastActivityView';

export default {
  title: 'components/organisms/Last Activity View',
  component: LastActivityView,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <LastActivityView
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
    />
  );
};
