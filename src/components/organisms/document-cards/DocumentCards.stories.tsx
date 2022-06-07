import { Icons } from '@/atom-design-system';
import { IdCardIcon, PassportIcon } from '@/icons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import DocumentCard from './DocumentCards';

export default {
  title: 'components/organisms/Document Cards',
  component: DocumentCard
} as ComponentMeta<typeof DocumentCard>;

const Template: ComponentStory<typeof DocumentCard> = (args) => <DocumentCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  noDataText: 'N/A',
  title: 'Passports',
  documents: [
    {
      id: 'ID56454',
      variant: 'inactive',
      statusLabel: 'NoValidate',
      title: 'Document ID',
      createdDate: {
        value: '10/11/2021, 12:00:00',
        label: 'Created Date'
      },
      verifiedDate: {
        value: '10/11/2021, 12:00:00',
        label: 'Verified Date'
      },
      icon: 'IdCardIcon',
      logo: <IdCardIcon />,
      pageLabel: 'page',
      pageQuantity: 3,
      menuItems: [
        {
          icon: <Icons.VerifiedIcon />,
          name: 'Verify',
          onClick: console.log('Verify')
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
      ]
    },
    {
      id: 'ID56454',
      variant: 'active',
      statusLabel: 'Validate',
      createdDate: {
        value: '10/11/2021, 12:00:00',
        label: 'Created Date'
      },
      verifiedDate: {
        value: '10/11/2021, 12:00:00',
        label: 'Verified Date'
      },
      icon: 'IdCardIcon',
      title: 'Passport',
      logo: <PassportIcon />,
      pageLabel: 'page',
      pageQuantity: 3,
      menuItems: [
        {
          icon: <Icons.VerifiedIcon />,
          name: 'Verify',
          onClick: console.log('Verify')
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
      ]
    },
    {
      id: 'ID56454',
      variant: 'active',
      statusLabel: 'Validate',
      createdDate: {
        value: '10/11/2021, 12:00:00',
        label: 'Created Date'
      },
      verifiedDate: {
        value: '10/11/2021, 12:00:00',
        label: 'Verified Date'
      },
      icon: 'IdCardIcon',
      title: 'Drive License',
      logo: <PassportIcon />,
      pageLabel: 'page',
      pageQuantity: 1,
      menuItems: [
        {
          icon: <Icons.VerifiedIcon />,
          name: 'Verify',
          onClick: console.log('Verify')
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
      ]
    }
  ]
};
