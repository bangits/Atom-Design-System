import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { Dashboard } from './Dashboard';

export default {
  component: Dashboard,
  decorators: [withKnobs],
  title: 'components/pages/Dashboard'
};

export const Default = () => {
  return (
    <Dashboard
      username='Armen'
      logoSrc='https://www.tattooforaweek.com/files/modules/products/5135/photos/full_the-atom-tattoonie-temporary-tattoo-s.jpg?v=0'
    />
  );
};
