import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import PartnerDetails from './PartnerDetails';

export default {
  title: 'components/pages/Partner Details',
  component: PartnerDetails,
  decorators: [withKnobs]
};

export const Default = () => {
  return <PartnerDetails></PartnerDetails>;
};
