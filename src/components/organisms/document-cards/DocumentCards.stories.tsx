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
  documents: [
    {
      variant: 'inactive',
      statusLabel: 'NoValidate',
      document: {
        value: 'ID12345678',
        label: 'Document ID'
      },
      verifiedDate: {
        value: '10/11/2021, 12:00:00',
        label: 'Verified Date'
      },
      col: 4,
      icon: 'IdCardIcon',
      title: 'ID Card',
      onArrowClick: () => console.log('onArrowClick'),
      logo: <IdCardIcon />,
      menuItems: [
        {
          icon: <Icons.VerifiedIcon />,
          name: 'Verify',
          onclick: () => console.log('verify')
        },
        {
          icon: <Icons.EyeIcon />,
          name: 'Preview',
          onclick: () => console.log('Preview')
        },
        {
          icon: <Icons.DownloadIcon />,
          name: 'Download',
          onclick: () => console.log('Preview')
        }
      ]
    },
    {
      variant: 'active',
      statusLabel: 'Validate',
      document: {
        value: 'N/A',
        label: 'Document ID'
      },
      verifiedDate: {
        value: '10/11/2021, 12:00:00',
        label: 'Verified Date'
      },
      col: 4,
      icon: 'IdCardIcon',
      title: 'Passport',
      onArrowClick: () => console.log('onArrowClick'),
      logo: <PassportIcon />,
      menuItems: [
        {
          icon: <Icons.VerifiedIcon />,
          name: 'Verify',
          onclick: () => console.log('verify')
        },
        {
          icon: <Icons.EyeIcon />,
          name: 'Preview',
          onclick: () => console.log('Preview')
        },
        {
          icon: <Icons.DownloadIcon />,
          name: 'Download',
          onclick: () => console.log('Preview')
        }
      ]
    },
    {
      variant: 'active',
      statusLabel: 'Validate',
      document: {
        value: '',
        label: 'Document ID'
      },
      verifiedDate: {
        value: '10/11/2021, 12:00:00',
        label: 'Verified Date'
      },
      col: 4,
      icon: 'IdCardIcon',
      title: 'Passport',
      logo: <PassportIcon />,
      menuItems: [
        {
          icon: <Icons.VerifiedIcon />,
          name: 'Verify',
          onclick: () => console.log('verify')
        },
        {
          icon: <Icons.EyeIcon />,
          name: 'Preview',
          onclick: () => console.log('Preview')
        },
        {
          icon: <Icons.DownloadIcon />,
          name: 'Download',
          onclick: () => console.log('Preview')
        }
      ]
    }
  ]
};
