import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import NameAndId from './NameAndId';

export default {
  title: 'components/molecules/Name And Id',
  component: NameAndId,
  decorators: [withKnobs]
};

export const Default = () => {
  return <NameAndId name='Albatros' id='ID 1234567' />;
};
