import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import DocumentStatus from './DocumentStatus';

export default {
  title: 'components/organisms/Status View',
  component: DocumentStatus,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <DocumentStatus
      startIcon='CircleIcon'
      variant='active'
      statusLabel='Validated'
      actions={[
        {
          onClick: () => {
            console.log;
          },
          buttonVariant: 'dark',
          iconName: 'ClearIcon'
        }
      ]}
    />
  );
};
