import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import PasswordGenerator from './PasswordGenerator';

export default {
  title: 'components/organisms/Password Generator',
  component: PasswordGenerator,
  decorators: [withKnobs]
};

export const Default = () => {
  return <PasswordGenerator onGenerateButtonClick={() => {}} onCopyButtonClick={() => {}} />;
};
