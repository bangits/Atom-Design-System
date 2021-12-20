import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { Dashboard } from './Dashboard';

export default {
  component: Dashboard,
  decorators: [withKnobs],
  title: 'components/pages/Dashboard'
};

export const Default = () => {
  return <Dashboard username='Armen' />;
};
