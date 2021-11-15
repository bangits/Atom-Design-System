import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import EditForm from './EditForm';

export default {
  title: 'components/organisms/Edit Form',
  component: EditForm,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <div style={{ width: 600 }}>
      <EditForm />
    </div>
  );
};
