import { FlexibleForm } from '@/components';
import { object, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { GameCompatibility } from '.';
import GameDetails from './GameDetails';

export default {
  title: 'components/pages/Game Details',
  component: GameDetails,
  decorators: [withKnobs]
};

export const Default = () => {
  enum SupportedBrowsersEnum {
    SAFARI = 'Safari',
    CHROME = 'Chrome',
    FIREFOX = 'Mozilla Firefox',
    EDGE = 'Edge',
    OPERA = 'Opera'
  }

  return (
    <GameDetails
      backgroundImgUrl=''
      mainImgUrl=''
      gameId=''
      gameName=''
      generalInformationContext={
        <form>
          <FlexibleForm
            title='Compatibility'
            editFormProps={{
              fields: [],
              renderInputs: (Component) => <Component />
            }}
            editedFormProps={{
              options: [],
              col: 6
            }}
            editedModeChildren={
              <>
                <GameCompatibility
                  devices={[]}
                  mobilePortrait={true}
                  certifiedCountries={[{ tagName: 'Armenia' }, { tagName: 'Armenia' }]}
                  currencies={[{ title: 'USD' }]}
                  uiLanguages={[{ title: 'Armenian' }]}
                  operatingLanguages={[]}
                  restrictedCountries={[]}
                  desktopLandscape={false}
                  desktopPortrait
                  mobileLandscape={false}
                  supportedBrowsers={{
                    browsersEnum: SupportedBrowsersEnum,
                    onChange: (values) => console.log(values)
                  }}
                  translations={{
                    noDataText: 'Not Completed',
                    certifiedCountries: 'Certified Countries',
                    currencies: 'Currencies',
                    desktop: 'Desktop',
                    devices: 'Devices',
                    landscape: 'Landscape',
                    mobile: 'Mobile',
                    mobileScreenMode: 'Mobile Screen Mode',
                    operatingLanguages: 'Operating Languages',
                    portrait: 'Portrait',
                    restrictedCountries: 'RestrictedCountries',
                    supportedBrowsers: 'Supported Browsers',
                    tableScreenMode: 'Tablet Screen Mode',
                    tablet: 'Tablet',
                    uiLanguages: 'Ui Languages'
                  }}
                />
              </>
            }
          />
        </form>
      }
      noDataText='N/A'
      buttons={{
        playButtonProps: {
          onClick: () => console.log('onClick')
        },
        playDemoButtonProps: {}
      }}
      translations={object('translations', {
        gameName: 'Shining Crown',
        gameId: 'ID123456',
        creationDate: 'Creation Date',
        createdBy: 'Created By',
        lastUpdateDate: 'Last Updated Date',
        lastUpdateBy: 'Last Update By',
        status: 'Active',
        generalInformation: 'General Information',
        assets: 'Assets',
        playButton: 'Play',
        playDemoButton: 'Play Demo'
      })}
      creationDate=''
      createdBy=''
      lastUpdateBy=''
      lastUpdateDate=''
      statusInfo={object('statusInfo', {
        label: 'Status',
        variant: 'active',
        statusLabel: 'Active'
      })}
      breadCrumbs={[
        {
          label: 'Game Management',
          isRedirect: true
        },
        {
          label: '"Shining Crown" game details'
        }
      ]}
    />
  );
};
