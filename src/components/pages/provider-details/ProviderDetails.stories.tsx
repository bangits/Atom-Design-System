import { object, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import ProviderDetails from './ProviderDetails';
import { ProviderGames } from './ProviderGames';

export default {
  title: 'components/pages/Provider Details',
  component: ProviderDetails,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <ProviderDetails
      lastUpdatedBy=''
      lastUpdatedDate=''
      totalGameCount={text('totalGameCount', '1024')}
      creationDate={text('creationDate', '09/05/2021 12:00:00')}
      createdBy={text('createdBy', 'email@gmail.com')}
      integrationType='Integration Type'
      partnerName='Partner Name'
      generalInformationContext={<></>}
      translations={{
        integrationType: 'Integration Type',
        partnerName: 'Partner Name',
        totalGameCount: 'Total Game Count',
        status: 'Status',
        creationDate: 'Created Date',
        createdBy: 'Created By',
        generalInformation: 'General Information',
        editButton: 'Edit',
        games: 'Games',
        lastUpdatedBy: 'Last Updated By',
        lastUpdatedDate: 'Last Updated Date'
      }}
      backgroundImgUrl='https://novomatic.com/sites/default/files/2017-05/Logo_N-Shortbrand.png'
      providerId='ID1234567'
      providerName='Novomatic'
      onBackgroundImgClick={console.log}
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
      gamesTabContent={
        <ProviderGames
          isLoadingGames
          searchInputMaxLength={30}
          translations={{
            addGame: 'Add Game',
            noGames: 'No Games',
            search: 'Search',
            playDemo: 'Play Demo'
          }}
          gameTypes={[
            {
              id: 1,
              name: 'Main Category',
              gameCount: 9
            },
            {
              id: 2,
              name: 'Category',
              gameCount: 29
            }
          ]}
          games={[
            {
              id: 25,
              name: 'EGT',
              icon: null,
              hasDemo: true
            },
            {
              id: 26,
              name: 'EGT',
              icon: null,
              hasDemo: true
            },
            {
              id: 27,
              name: 'EGT',
              icon: null,
              hasDemo: true
            },
            {
              id: 28,
              name: 'EGT',
              icon: null,
              hasDemo: true
            },
            {
              id: 29,
              name: 'EGT',
              icon: null,
              hasDemo: true
            },
            {
              id: 30,
              name: 'քոեռտըւ',
              icon: null,
              hasDemo: true
            },
            {
              id: 31,
              name: 'ԱԱԱՍՍՍԲԲԲԲԲ',
              icon: null,
              hasDemo: true
            },
            {
              id: 32,
              name: '                                                 1',
              icon: null,
              hasDemo: true
            },
            {
              id: 33,
              name: 'սլօտ սլօտ սլօտ սլօտ սլօտ սլօտ սլօտ սլօտ սլօտ սլօտ  ',
              icon: null,
              hasDemo: true
            },
            {
              id: 34,
              name: 'սլօտ սլօտ սլօտ սլօտ սլօտ սլօտ սլօտ սլօտ սլօտ սլօտ %  ',
              icon: null,
              hasDemo: true
            },
            {
              id: 35,
              name: '!@#$%^&&^%$#@#$F%^%$#',
              icon: null,
              hasDemo: true
            },
            {
              id: 36,
              name: '!@#$%^&&^%$#@#$F%^%$#',
              icon: null,
              hasDemo: true
            },
            {
              id: 37,
              name: '!@#$%^&&^%$#@#$F%^%$#',
              icon: null,
              hasDemo: true
            },
            {
              id: 38,
              name: '!@#$%^&&^%$#@#$F%^%$#',
              icon: null,
              hasDemo: true
            },
            {
              id: 39,
              name: '!@#$%^&&^%$#@#$F%^%$#',
              icon: null,
              hasDemo: true
            },
            {
              id: 40,
              name: '!@#$%^&&^%$#@#$F%^%$#',
              icon: null,
              hasDemo: true
            },
            {
              id: 41,
              name: 'stringfg',
              icon: null,
              hasDemo: true
            },
            {
              id: 42,
              name: 'string',
              icon: null,
              hasDemo: true
            },
            {
              id: 43,
              name: 'string',
              icon: null,
              hasDemo: true
            }
          ]}
          onChange={console.log}
          onGameClick={console.log}
          onAddGameClick={console.log}
          onGameDetailsClick={console.log}
          isAllGamesLoaded={false}
          isTabLoading={false}
          hasGames={true}
        />
      }
    />
  );
};
