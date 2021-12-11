import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import TagsView from './TagsView';

export default {
  title: 'components/organisms/Tags View',
  component: TagsView,
  decorators: [withKnobs]
};

export const Default = () => {
  return <TagsView />;
};
