/* eslint-disable no-console */
import { Icons } from '@/atom-design-system';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import Options from './Options';

export default {
  title: 'components/molecules/Options',
  component: Options,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <Options
      data={[
        {
          icon: <Icons.VerifiedIcon />,
          name: 'Verify',
          onClick: () => console.log('Verify')
        },
        {
          icon: <Icons.EyeIcon />,
          name: 'Preview',
          onClick: () => console.log('Preview')
        },
        {
          icon: <Icons.DownloadIcon />,
          name: 'Download',
          onClick: () => console.log('Download')
        }
      ]}
    />
  );
};
