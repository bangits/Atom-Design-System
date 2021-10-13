import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import Provider from './Provider';

export default {
  component: Provider,
  decorators: [withKnobs],
  title: 'components/pages/Provider'
};

export const Default = () => {
  return <Provider />;
};
