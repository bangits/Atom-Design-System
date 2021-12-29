import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import LabelEndMark from './LabelEndMark';

export default {
  title: 'components/molecules/LabelEndMark',
  decorators: [withKnobs],
  component: LabelEndMark
};

export const Default = () => {
  return <LabelEndMark label='Local Time' text='12/27/2021/6:52' />;
};
