import { number, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import SpeedIndicator from './SpeedIndicator';

export default {
  title: 'components/atoms/Speed Indicator',
  decorators: [withKnobs],
  component: SpeedIndicator
};

export const Default = () => {
  return <SpeedIndicator speed={1} />;
};
