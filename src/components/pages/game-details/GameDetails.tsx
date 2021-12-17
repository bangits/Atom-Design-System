import { NameDescription, StatusView, StatusViewProps } from '@/components';
import { typedMemo } from '@/helpers';
import {
  ChromeIcon,
  DesktopIcon,
  EdgeIcon,
  FirefoxIcon,
  MobileIcon,
  OperaIcon,
  Safari2Icon,
  TabletIcon
} from '@/icons';
import { Breadcrumb, BreadcrumbProps, Button, Card, StatusProps, Tab, Tag, TagCountry } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC, useState } from 'react';
import styles from './GameDetails.module.scss';

export interface GameDetailsProps {
  statusInfo: Omit<StatusViewProps, 'label'>;
  breadCrumbs?: BreadcrumbProps['links'];
  creationDate: string;
  createdBy: string;
  lastUpdateDate: string;
  lastUpdateBy: string;
  noDataText: string;

  docInfo: {
    documentID: string | number;
    type: string;
    expirationDate: string;
    statusLabel: string;
    statusVariant: StatusProps['variant'];
  };
  buttons: {
    first: string;
    second: string;
  };

  translations: {
    creationDate: string;
    createdBy: string;
    lastUpdateDate: string;
    lastUpdateBy: string;
    status: string;
    expirationDate: string;
    type: string;
    documentID: string;
    gameInformation: string;
    mainInformation: string;
    organizationData: string;
    noDataText: string;
  };
}
const GameDetails: FC<GameDetailsProps> = ({
  breadCrumbs,
  docInfo,
  buttons,
  statusInfo,
  translations,
  creationDate,
  createdBy,
  lastUpdateBy,
  lastUpdateDate,
  noDataText
}) => {
  const [tabValue, setTabValue] = useState(1);
  const [subTabValue, setSubTabValue] = useState(1);
  const [edit, setEdit] = useState(false);
  const [date, setDate] = useState<Date | null>(null);

  return (
    <div className={classNames(styles.GameDetailsBase)}>
      <div className={classNames(styles['BreadCrumbWrapper'])}>
        <Breadcrumb links={[]} />
      </div>
      {/* MainCarcass */}
      <div className={classNames(styles['MainCarcass'], 'MainCarcass')}>
        <div className={classNames(styles['MainCarcass__Sidebar'], 'MainCarcass__Sidebar')}>
          {/* <div className={classNames(styles['CardWrapper'], 'CardWrapper')}> */}
          {/* <DetailsMainInfo
              label='Shining Crown'
              id='ID1234567'
              src='https://www.casinowow.com/media/uploads/Shining-Crown-Icon-190x190.png'
            /> */}
          {/* </div>  */}
          <div>
            <StatusView {...statusInfo} label={'Status'} />
          </div>

          <div
            className={classNames(
              styles['CardWrapper'],
              styles['CardWrapper--Change-Update'],
              'CardWrapper',
              'CardWrapper--Change-Update'
            )}>
            <NameDescription
              data={[
                {
                  name: translations.creationDate,
                  description: creationDate
                },
                {
                  name: translations.createdBy,
                  description: createdBy
                },
                {
                  name: translations.createdBy,
                  description: lastUpdateDate
                },
                {
                  name: translations.createdBy,
                  description: lastUpdateBy
                }
              ]}
              noDataText={noDataText}
            />
          </div>
          <div className={classNames(styles['EmptyWrapper'], 'EmptyWrapper')}>
            <Button>{buttons.first}</Button>
            <Button variant='ghost'>{buttons.second}</Button>
          </div>
        </div>
        <div className={classNames(styles['MainCarcass__Content'], 'MainCarcass__Content')}>
          <Card>
            <div
              className={classNames(
                styles['Card__Inner'],
                styles['Card__Inner--Lvl-1'],
                'Card__Inner',
                'Card__Inner--Lvl-1'
              )}>
              <Tab
                options={[
                  {
                    title: 'General Information',
                    value: 1
                  },
                  {
                    title: 'Assets',
                    value: 2
                  }
                ]}
                defaultValue={1}
                onChange={(value) => setTabValue(value)}
              />

              {tabValue === 1 && subTabValue === 1 && (
                <div
                  className={classNames(
                    styles['TabContent'],
                    styles['TabContent--TwoColGrid'],
                    'TabContent',
                    'TabContent--TwoColGrid'
                  )}>
                  <div
                    className={classNames(
                      styles['FlexibleFormWrapper'],
                      styles['FlexibleFormWrapper--1'],
                      'FlexibleFormWrapper',
                      'FlexibleFormWrapper--1'
                    )}></div>
                  <div
                    className={classNames(
                      styles['FlexibleFormWrapper'],
                      styles['FlexibleFormWrapper--2'],
                      'FlexibleFormWrapper',
                      'FlexibleFormWrapper--2'
                    )}></div>

                  <div
                    className={classNames(
                      styles['FlexibleFormWrapper'],
                      styles['FlexibleFormWrapper--3'],
                      'FlexibleFormWrapper',
                      'FlexibleFormWrapper--3'
                    )}>
                    <div className={classNames(styles['CardHeader'], 'CardHeader')}>
                      <h2 className={classNames(styles['CardTitle'], 'CardTitle')}>Compatibility</h2>
                    </div>
                    qw qw w
                    <Card>
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
                            <div className={classNames(styles['CardSubtitle'], 'CardSubtitle')}>Device</div>
                            <div className={classNames(styles['TagsCell'], 'TagsCell')}>
                              <span className={classNames(styles['Device-Tag'], 'Device-Tag')}>
                                <MobileIcon width='10px' />
                                <span className={classNames(styles['Device-Tag-Label'], 'Device-Tag-Label')}>
                                  Mobile
                                </span>
                              </span>

                              <span className={classNames(styles['Device-Tag'], 'Device-Tag')}>
                                <TabletIcon width='20px' />
                                <span className={classNames(styles['Device-Tag-Label'], 'Device-Tag-Label')}>
                                  Tablet
                                </span>
                              </span>

                              <span className={classNames(styles['Device-Tag'], 'Device-Tag')}>
                                <DesktopIcon width='22px' />
                                <span className={classNames(styles['Device-Tag-Label'], 'Device-Tag-Label')}>
                                  Desktop
                                </span>
                              </span>
                            </div>
                          </div>

                          <div className={classNames(styles['FlexList__Item'], 'FlexList__Item')}>
                            <div className={classNames(styles['CardSubtitle'], 'CardSubtitle')}>Mobile Screen Mode</div>
                            <div className={classNames(styles['TagsCell'], 'TagsCell')}>
                              <span className={classNames(styles['Device-Tag'], 'Device-Tag')}>
                                <MobileIcon width='10px' />
                                <span className={classNames(styles['Device-Tag-Label'], 'Device-Tag-Label')}>
                                  Portrait
                                </span>
                              </span>

                              <span className={classNames(styles['Device-Tag'], 'Device-Tag')}>
                                <TabletIcon width='20px' />
                                <span className={classNames(styles['Device-Tag-Label'], 'Device-Tag-Label')}>
                                  Landscape
                                </span>
                              </span>
                            </div>
                          </div>

                          <div className={classNames(styles['FlexList__Item'], 'FlexList__Item')}>
                            <div className={classNames(styles['CardSubtitle'], 'CardSubtitle')}>Tablet Screen Mode</div>
                            <div className={classNames(styles['TagsCell'], 'TagsCell')}>
                              <span className={classNames(styles['Device-Tag'], 'Device-Tag')}>
                                <MobileIcon width='10px' />
                                <span className={classNames(styles['Device-Tag-Label'], 'Device-Tag-Label')}>
                                  Portrait
                                </span>
                              </span>

                              <span className={classNames(styles['Device-Tag'], 'Device-Tag')}>
                                <TabletIcon width='20px' />
                                <span className={classNames(styles['Device-Tag-Label'], 'Device-Tag-Label')}>
                                  Landscape
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                        {/*  */}

                        <div className={classNames(styles['CardSubtitle'], 'CardSubtitle')}>UI Languages</div>
                        <div className={classNames(styles['TagsCell'], 'TagsCell')}>
                          <Tag title='Armenian' closeIcon={false} inactive={false} />
                          <Tag title='Arabic' closeIcon={false} inactive={false} />
                          <Tag title='Brazil' closeIcon={false} inactive={false} />
                          <Tag title='Chinese' closeIcon={false} inactive={false} />
                          <Tag title='Croatian' closeIcon={false} inactive={false} />
                        </div>

                        <div className={classNames(styles['CardSubtitle'], 'CardSubtitle')}>Operating Languages</div>
                        <div className={classNames(styles['TagsCell'], 'TagsCell')}>
                          <Tag title='Armenian' closeIcon={false} inactive={false} />
                          <Tag title='Arabic' closeIcon={false} inactive={false} />
                          <Tag title='Brazil' closeIcon={false} inactive={false} />
                          <Tag title='Chinese' closeIcon={false} inactive={false} />
                          <Tag title='Croatian' closeIcon={false} inactive={false} />
                        </div>

                        <div className={classNames(styles['CardSubtitle'], 'CardSubtitle')}>Certified Countries</div>
                        <div className={classNames(styles['TagsCell'], 'TagsCell')}>
                          <TagCountry />
                          <TagCountry />
                          <TagCountry />
                        </div>

                        <div className={classNames(styles['CardSubtitle'], 'CardSubtitle')}>Restricted Countries</div>
                        <div className={classNames(styles['TagsCell'], 'TagsCell')}>
                          <TagCountry />
                          <TagCountry />
                          <TagCountry />
                        </div>

                        <div className={classNames(styles['CardSubtitle'], 'CardSubtitle')}>Currencies</div>
                        <div className={classNames(styles['TagsCell'], 'TagsCell')}>
                          <Tag title='¥ YEN' inactive className={styles.Currency} />
                          <Tag title='€ EUR' inactive className={styles.Currency} />
                          <Tag title='$ USD' inactive className={styles.Currency} />
                        </div>

                        <div className={classNames(styles['CardSubtitle'], 'CardSubtitle')}>Supported Browsers</div>
                        <div className={classNames(styles['TagsCell'], 'TagsCell')}>
                          <ChromeIcon width='30px' />
                          <EdgeIcon width='30px' />
                          <FirefoxIcon width='30px' />
                          <OperaIcon width='30px' />
                          <Safari2Icon width='30px' />
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              )}
              {tabValue === 2 && subTabValue === 1 && <div>Assets</div>}
            </div>
          </Card>
        </div>
      </div>
      {/* MainCarcass */}
    </div>
  );
};

export default typedMemo(GameDetails);
