import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import UserMainInfo from './UserMainInfo';

export default {
  title: 'components/molecules/User Main Info',
  component: UserMainInfo,
  decorators: [withKnobs]
};

export const Default = () => {
  return <UserMainInfo className='' />;
};
