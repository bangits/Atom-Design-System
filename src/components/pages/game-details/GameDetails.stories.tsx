import { object, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import GameDetails from './GameDetails';

export default {
  title: 'components/pages/Game Details',
  component: GameDetails,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <GameDetails
      breadCrumbs={[]}
      buttons={{ first: 'Play', second: 'Play Demo' }}
      noDataText='data chka'
      translations={object('translations', {
        creationDate: 'Creation Date',
        createdBy: 'Created By',
        lastUpdateDate: 'Last Updated Date',
        lastUpdateBy: 'Last Update By',
        status: 'Active',
        expirationDate: '21/12/2021',
        type: 'male',
        documentID: 'ID',
        gameInformation: 'gameInformation',
        mainInformation: 'mainInformation',
        organizationData: 'organizationData',
        noDataText: 'data chka'
      })}
      creationDate='creationDate'
      createdBy='creationBy'
      lastUpdateBy='lastUpdateBy'
      lastUpdateDate='lastUpdateDate'
      statusInfo={object('statusInfo', {
        label: 'Status',
        variant: 'active',
        statusLabel: 'Active'
      })}
      docInfo={object('docInfo', {
        documentID: 5461213584,
        type: 'Partnership Agreement',
        expirationDate: '12/08/2021',
        statusLabel: 'Signed',
        statusVariant: 'active'
      })}

      // breadCrumbs={object('breadCrumbProps', [])}
    />
  );
};
