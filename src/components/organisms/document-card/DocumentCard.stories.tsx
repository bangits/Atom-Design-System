/* eslint-disable @typescript-eslint/no-empty-function */
import { Icons } from '@/atom-design-system';
import { PassportIcon } from '@/icons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import DocumentCard from './DocumentCard';

export default {
  title: 'components/organisms/DocumentCard',
  component: DocumentCard
} as ComponentMeta<typeof DocumentCard>;

const Template: ComponentStory<typeof DocumentCard> = (args) => <DocumentCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  noDataText: 'N/A',
  createdDate: {
    label: 'Created Date',
    value: '10/11/2021, 12:00:00'
  },
  id: 'ID564645',
  verifiedDate: {
    label: 'Verified Date',
    value: '10/11/2021, 12:00:00'
  },
  col: 4,
  title: 'ID Card',
  logo: <PassportIcon />,
  onArrowClick: () => {},
  icon: '',
  variant: 'active',
  statusLabel: 'Verified',
  menuItems: [
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
      link: '/',
      download: true
    }
  ],
  pageQuantity: 3,
  pageLabel: 'pages'
};
