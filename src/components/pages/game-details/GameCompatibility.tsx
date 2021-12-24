import {
  BrowsersCheckboxGroup,
  BrowsersCheckboxGroupProps,
  Countries,
  CurrencyGroup,
  LabelGroup,
  LanguagesGroup
} from '@/components';
import { DesktopIcon, MobileIcon, TabletIcon } from '@/icons';
import { TagCountryProps, TagProps, Typography } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './GameDetails.module.scss';

export interface GameCompatibilityProps {
  translations: {
    noDataText: string;
    devices: string;
    mobileScreenMode: string;
    tableScreenMode: string;
    uiLanguages: string;
    operatingLanguages: string;
    certifiedCountries: string;
    restrictedCountries: string;
    currencies: string;
    supportedBrowsers: string;
    mobile: string;
    tablet: string;
    desktop: string;
    portrait: string;
    landscape: string;
  };
  devices: number[];
  mobilePortrait: boolean;
  mobileLandscape: boolean;
  desktopPortrait: boolean;
  desktopLandscape: boolean;

  uiLanguages: TagProps[];
  operatingLanguages: TagProps[];
  certifiedCountries: TagCountryProps[];
  restrictedCountries: TagCountryProps[];
  currencies: TagProps[];
  supportedBrowsers: BrowsersCheckboxGroupProps;
}

const GameCompatibility: FC<GameCompatibilityProps> = ({
  uiLanguages,
  certifiedCountries,
  currencies,
  operatingLanguages,
  restrictedCountries,
  supportedBrowsers,
  translations,
  devices,
  mobilePortrait,
  mobileLandscape,
  desktopPortrait,
  desktopLandscape
}) => {
  return (
    <>
      <div
        className={classNames(
          styles['Card__Inner'],
          styles['Card__Inner--Lvl-2'],
          'Card__Inner',
          'Card__Inner--Lvl-2'
        )}>
        {/*  */}
        <div className={classNames(styles['FlexList'], 'FlexList')}>
          <div className={classNames(styles['FlexList__Item'], 'FlexList__Item')}>
            <div className={classNames(styles['CardSubtitle'], 'CardSubtitle')}>{translations.devices}</div>
            <div className={classNames(styles['TagsCell'], 'TagsCell')}>
              {devices.length === 0 ? (
                <Typography variant='p4' className={styles['GameDetailsBase--notCompleted']}>
                  {translations.noDataText}
                </Typography>
              ) : (
                devices?.map((id) =>
                  id === 1 ? (
                    <>
                      <span key={id} className={classNames(styles['Device-Tag'], 'Device-Tag')}>
                        <MobileIcon width='1rem' />
                        <span className={classNames(styles['Device-Tag-Label'], 'Device-Tag-Label')}>
                          {translations.mobile}
                        </span>
                      </span>
                    </>
                  ) : id === 2 ? (
                    <>
                      <span key={id} className={classNames(styles['Device-Tag'], 'Device-Tag')}>
                        <TabletIcon width='2rem' />
                        <span className={classNames(styles['Device-Tag-Label'], 'Device-Tag-Label')}>
                          {translations.tablet}
                        </span>
                      </span>
                    </>
                  ) : id === 3 ? (
                    <>
                      <span key={id} className={classNames(styles['Device-Tag'], 'Device-Tag')}>
                        <DesktopIcon width='2.2rem' />
                        <span className={classNames(styles['Device-Tag-Label'], 'Device-Tag-Label')}>
                          {translations.desktop}
                        </span>
                      </span>
                    </>
                  ) : (
                    <></>
                  )
                )
              )}
            </div>
          </div>

          <div className={classNames(styles['FlexList__Item'], 'FlexList__Item')}>
            <div className={classNames(styles['CardSubtitle'], 'CardSubtitle')}>{translations.mobileScreenMode}</div>
            <div className={classNames(styles['TagsCell'], 'TagsCell')}>
              {mobilePortrait ? (
                <span className={classNames(styles['Device-Tag'], 'Device-Tag')}>
                  <MobileIcon width='1rem' />
                  <span className={classNames(styles['Device-Tag-Label'], 'Device-Tag-Label')}>
                    {translations.portrait}
                  </span>
                </span>
              ) : (
                <Typography variant='p4' className={styles['GameDetailsBase--notCompleted']}>
                  {translations.noDataText}
                </Typography>
              )}

              {mobileLandscape ? (
                <span className={classNames(styles['Device-Tag'], 'Device-Tag')}>
                  <TabletIcon width='2rem' />
                  <span className={classNames(styles['Device-Tag-Label'], 'Device-Tag-Label')}>
                    {translations.landscape}
                  </span>
                </span>
              ) : (
                <Typography variant='p4' className={styles['GameDetailsBase--notCompleted']}></Typography>
              )}
            </div>
          </div>

          <div className={classNames(styles['FlexList__Item'], 'FlexList__Item')}>
            <div className={classNames(styles['CardSubtitle'], 'CardSubtitle')}>{translations.tableScreenMode}</div>
            <div className={classNames(styles['TagsCell'], 'TagsCell')}>
              {desktopPortrait ? (
                <span className={classNames(styles['Device-Tag'], 'Device-Tag')}>
                  <MobileIcon width='1rem' />
                  <span className={classNames(styles['Device-Tag-Label'], 'Device-Tag-Label')}>
                    {translations.portrait}
                  </span>
                </span>
              ) : (
                <Typography variant='p4' className={styles['GameDetailsBase--notCompleted']}>
                  {translations.noDataText}
                </Typography>
              )}

              {desktopLandscape ? (
                <span className={classNames(styles['Device-Tag'], 'Device-Tag')}>
                  <TabletIcon width='2rem' />
                  <span className={classNames(styles['Device-Tag-Label'], 'Device-Tag-Label')}>
                    {translations.landscape}
                  </span>
                </span>
              ) : (
                <Typography variant='p4' className={styles['GameDetailsBase--notCompleted']}></Typography>
              )}
            </div>
          </div>
        </div>

        <LabelGroup title={translations.uiLanguages}>
          {uiLanguages.length === 0 ? (
            <Typography variant='p4' className={styles['GameDetailsBase--notCompleted']}>
              {translations.noDataText}
            </Typography>
          ) : (
            <LanguagesGroup tags={uiLanguages} />
          )}
        </LabelGroup>

        <LabelGroup title={translations.operatingLanguages}>
          {operatingLanguages.length === 0 ? (
            <Typography variant='p4' className={styles['GameDetailsBase--notCompleted']}>
              {translations.noDataText}
            </Typography>
          ) : (
            <LanguagesGroup tags={operatingLanguages} />
          )}
        </LabelGroup>

        <LabelGroup title={translations.certifiedCountries}>
          {certifiedCountries.length === 0 ? (
            <Typography variant='p4' className={styles['GameDetailsBase--notCompleted']}>
              {translations.noDataText}
            </Typography>
          ) : (
            <Countries tagCountries={certifiedCountries} />
          )}
        </LabelGroup>

        <LabelGroup title={translations.restrictedCountries}>
          {restrictedCountries.length === 0 ? (
            <Typography variant='p4' className={styles['GameDetailsBase--notCompleted']}>
              {translations.noDataText}
            </Typography>
          ) : (
            <Countries tagCountries={restrictedCountries} />
          )}
        </LabelGroup>

        <LabelGroup title={translations.currencies}>
          {currencies.length === 0 ? (
            <Typography variant='p4' className={styles['GameDetailsBase--notCompleted']}>
              {translations.noDataText}
            </Typography>
          ) : (
            <CurrencyGroup currencies={currencies} />
          )}
        </LabelGroup>

        <LabelGroup title={'Supported Browsers'}>
          <BrowsersCheckboxGroup
            onChange={supportedBrowsers.onChange}
            browsersEnum={supportedBrowsers.browsersEnum}
            disabled={supportedBrowsers.disabled}
            values={supportedBrowsers.initialValues}
          />
        </LabelGroup>
      </div>
    </>
  );
};

export default GameCompatibility;
