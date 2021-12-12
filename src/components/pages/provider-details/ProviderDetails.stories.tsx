import { object, text, withKnobs } from '@storybook/addon-knobs';
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
      totalGameCount={text('totalGameCount', '1024')}
      creationDate={text('creationDate', '09/05/2021 12:00:00')}
      createdBy={text('createdBy', 'email@gmail.com')}
      generalInformationContext={<></>}
      translations={{
        totalGameCount: 'Total Game Count',
        status: 'Status',
        creationDate: 'Created Date',
        createdBy: 'Created By',
        generalInformation: 'General Information',
        editButton: 'Edit',
        games: 'Games'
      }}
      mainDetailsInfo={{
        src: 'https://novomatic.com/sites/default/files/2017-05/Logo_N-Shortbrand.png',
        label: 'Novomatic',
        id: 'ID1234567'
      }}
      statusInfo={{
        label: '',
        statusLabel: 'Active',
        actions: [
          {
            iconName: 'LogOutIcon',
            /* @eslint-ignore */
            onClick: () => {},
            tooltipText: 'Terminate'
          }
        ]
      }}
      breadCrumb={object('breadCrumbs', [
        {
          label: 'Provider Management',
          isRedirect: true
        },
        {
          label: 'Novomatic details'
        }
      ])}
    />
  );
};
