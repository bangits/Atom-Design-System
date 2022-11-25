/* eslint-disable @typescript-eslint/no-empty-function */
import { Icons } from '@/atom-design-system';
import { PassportIcon } from '@/icons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CustomCard from './CustomCard';

export default {
  title: 'components/organisms/CustomCard',
  component: CustomCard
} as ComponentMeta<typeof CustomCard>;

const Template: ComponentStory<typeof CustomCard> = (args) => <CustomCard {...args} />;

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
