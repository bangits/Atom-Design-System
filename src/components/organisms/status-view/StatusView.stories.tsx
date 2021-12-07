import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import StatusView from './StatusView';

export default {
  title: 'components/organisms/Status View',
  component: StatusView,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <StatusView
      statusInfo={{
        label: 'Status',
        variant: 'active',
        statusLabel: 'Validated'
      }}
    />
  );
};
