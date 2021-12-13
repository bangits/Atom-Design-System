import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import LabelTag from './LabelTag';

export default {
  title: 'components/molecules/Label Tag',
  component: LabelTag,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <LabelTag
      label='Total Game Count'
      tag={{
        title: '1024'
      }}
    />
  );
};
