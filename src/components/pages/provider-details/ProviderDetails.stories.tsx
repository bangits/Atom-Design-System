import { FlexibleForm } from '@/components';
import { IconButton, Status } from '@my-ui/core';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import ProviderDetails from './ProviderDetails';

export default {
  title: 'components/pages/Provider Details',
  component: ProviderDetails,
  decorators: [withKnobs]
};

export const Default = () => {
  return <ProviderDetails />;
};
