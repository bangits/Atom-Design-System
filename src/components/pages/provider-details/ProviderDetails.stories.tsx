import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import ProviderDetails from './ProviderDetails';

export default {
  title: 'components/pages/Provider Details',
  component: ProviderDetails,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <ProviderDetails
      mainDetailsInfo={{
        src: 'https://novomatic.com/sites/default/files/2017-05/Logo_N-Shortbrand.png',
        label: 'Novomatic',
        id: 'ID1234567'
      }}
      statusInfo={{
        label: 'Status',
        statusLabel: 'Active',
        actions: [
          {
            iconName: 'LogOutIcon',
            onClick: () => {},
            tooltipText: 'Terminate'
          }
        ]
      }}
      countViewInfo={{
        title: 'Total Game Count',
        count: '1024'
      }}
      creationInfo={{
        data: [
          {
            name: 'Created Date',
            description: '09/05/2021 12:00:00'
          },
          {
            name: 'Created By',
            description: 'email@gmail.com'
          }
        ]
      }}
      breadCrumb={{
        links: [
          {
            label: 'Provider Management',
            isRedirect: true
          },
          {
            label: 'Novomatic details'
          }
        ]
      }}
    />
  );
};
