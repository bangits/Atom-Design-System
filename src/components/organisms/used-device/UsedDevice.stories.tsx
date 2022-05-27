import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import StatusView from './UsedDevice';

export default {
  title: 'components/organisms/Status View',
  component: StatusView,
  decorators: [withKnobs]
};

export const Default = () => {
  return <StatusView label='Used Device' icon={<></>} />;
};
