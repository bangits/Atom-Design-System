import {
  FlexibleForm,
  FlexibleFormProps,
  LastActivityView,
  LastActivityViewProps,
  StatusView,
  StatusViewProps,
  TagsView,
  UserView,
  NameDescription,
  NameDescriptionProps,
  ItemDetails
} from '@/components';
import { IconsGroup } from '@/components/molecules/icons-group';
import { UserViewProps } from '@/components/organisms/user-view/UserView';

import WalletView, { WalletViewProps } from '@/components/organisms/wallet-view/WalletView';
import DetailsMainInfo, { DetailsMainInfoProps } from '@/components/organisms/details-main-info/DetailsMainInfo';

import { typedMemo } from '@/helpers';
import {
  Breadcrumb,
  Card,
  IconButton,
  SubTab,
  Status,
  StatusProps,
  SubTabProps,
  Tab,
  Tag,
  Button,
  ButtonProps,
  TagCountry,
  TextInput,
  TextInputProps,
  CardImg,
  CardImgProps
} from '@my-ui/core';
import { BreadcrumbProps } from '@my-ui/core/dist/components/navigation/breadcrumb/Breadcrumb';
import { TabProps } from '@my-ui/core/dist/components/tab/Tab';

import classNames from 'classnames';
import React, { FC, useState } from 'react';
import styles from './GameDetails.module.scss';
import {
  DesktopIcon,
  TabletIcon,
  MobileIcon,
  ChromeIcon,
  EdgeIcon,
  FirefoxIcon,
  OperaIcon,
  Safari2Icon,
  EmptyGameListIcon
} from '@/icons';

export interface GameDetailsProps
  extends UserViewProps,
    WalletViewProps,
    StatusViewProps,
    LastActivityViewProps,
    DetailsMainInfoProps,
    ButtonProps,
    CardImgProps,
    TextInputProps,
    FlexibleFormProps {
  parentCompany: NameDescriptionProps;
  docInfo: Omit<NameDescriptionProps, 'children'> & {
    status?: {
      statusVariant?: StatusProps['variant'];
      statusName?: string;
      statusLabel?: string;
    };
  };
  breadCrumb?: BreadcrumbProps;
  tabs?: {
    tab?: TabProps & {
      whichSubs: number;
    };
    subTab?: SubTabProps & {
      whichTab: number;
    };
    form?: FlexibleFormProps[] & {
      whichSub: number;
    };
  };
}

const GameDetails: FC<GameDetailsProps> = ({ breadCrumb, tabs, docInfo }) => {
  const [tabValue, setTabValue] = useState(1);
  const [subTabValue, setSubTabValue] = useState(1);
  const [edit, setEdit] = useState(false);
  const [date, setDate] = useState<Date | null>(null);

  return (
    <div className={classNames(styles.GameDetailsBase)}>
      <div className={classNames(styles['BreadCrumbWrapper'])}>
        <Breadcrumb links={breadCrumb.links} />
      </div>
      {/* MainCarcass */}
      <div className={classNames(styles['MainCarcass'], 'MainCarcass')}>
        <div className={classNames(styles['MainCarcass__Sidebar'], 'MainCarcass__Sidebar')}>
          <div className={classNames(styles['CardWrapper'], 'CardWrapper')}>
            <DetailsMainInfo
              label='Shining Crown'
              id='ID1234567'
              src='https://www.casinowow.com/media/uploads/Shining-Crown-Icon-190x190.png'
            />
          </div>

          <div className={classNames(styles['CardWrapper'], 'CardWrapper')}>
            <StatusView
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
            />
          </div>

          <div className={classNames(styles['CardWrapper'], 'CardWrapper')}>
            <NameDescription data={docInfo.data} title={docInfo.title}></NameDescription>
          </div>
          <div className={classNames(styles['EmptyWrapper'], 'EmptyWrapper')}>
            <Button>Play</Button>
            <Button variant='ghost'>Play Demo</Button>
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
                    title: 'Games',
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
                    )}>
                    <FlexibleForm
                      editedFormProps={{
                        options: [
                          {
                            title: 'Game Name',
                            value: 'Shining Crown'
                          },
                          {
                            title: 'Shining Crown',
                            value: 'ID123456789415'
                          },
                          {
                            title: 'Type',
                            value: 'Casino Games'
                          },
                          {
                            title: 'Subtype',
                            value: 'Slots'
                          },
                          {
                            title: 'Provider',
                            value: 'EGT'
                          },
                          {
                            title: 'Release Date',
                            value: '09/05/2021 12:00:00'
                          },
                          {
                            title: 'Class',
                            value: 'Branded'
                          },
                          {
                            title: 'Has Demo',
                            value: 'Yes'
                          }
                        ],
                        title: 'Game Information',
                        editButton: (
                          <IconButton
                            icon={
                              <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24'>
                                <path
                                  fill='currentColor'
                                  d='M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z'
                                />
                              </svg>
                            }
                            variant='dark'
                          />
                        )
                      }}
                    />
                  </div>
                  <div
                    className={classNames(
                      styles['FlexibleFormWrapper'],
                      styles['FlexibleFormWrapper--2'],
                      'FlexibleFormWrapper',
                      'FlexibleFormWrapper--2'
                    )}>
                    <FlexibleForm
                      editedFormProps={{
                        options: [
                          {
                            title: 'RTP',
                            value: '98.7 %'
                          },
                          {
                            title: 'Volatility',
                            value: 'Low-Medium'
                          },
                          {
                            title: 'Max Win',
                            value: 'x 2000'
                          }
                        ],
                        title: 'Game Properties',
                        editButton: (
                          <IconButton
                            icon={
                              <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24'>
                                <path
                                  fill='currentColor'
                                  d='M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z'
                                />
                              </svg>
                            }
                            variant='dark'
                          />
                        )
                      }}
                    />
                  </div>

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
                          <Tag title='YEN' inactive className={styles.Currency} />
                          <Tag title='EUR' inactive className={styles.Currency} />
                          <Tag title='USD' inactive className={styles.Currency} />
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
              {tabValue === 2 && subTabValue === 1 && (
                <div className={classNames(styles['GamesList'], 'GamesList')}>
                  {/* == START EMPTY GAMES LIST== */}
                  <div className={classNames(styles['GamesList__Empty'], 'GamesList__Empty')}>
                    <div className={classNames(styles['GamesList__Header'], 'GamesList__Header')}>
                      <div className={classNames(styles['GamesList__Header-1'], 'GamesList__Header-1')}></div>
                      <div className={classNames(styles['GamesList__Header-2'], 'GamesList__Header-2')}>
                        <Button
                          type='button'
                          className={classNames(styles['GamesList__Add-Game-Btn'], 'GamesList__Add-Game-Btn')}>
                          <span
                            className={classNames(
                              styles['GamesList__Add-Game-Btn-Label'],
                              'GamesList__Add-Game-Btn-Label'
                            )}>
                            <i
                              className={classNames(
                                styles['GamesList__Add-Game-Btn--Icon'],
                                'GamesList__Add-Game-Btn--Icon'
                              )}>
                              +
                            </i>
                            Add Game
                          </span>
                        </Button>
                      </div>
                    </div>

                    {/*  Start Empty-Cell */}
                    <div className={classNames(styles['Empty-Page-Cell'], 'Empty-Page-Cell')}>
                      <span className={classNames(styles['Empty-Page-Icon-Cell'], 'Empty-Page-Icon-Cell')}>
                        <EmptyGameListIcon />
                      </span>
                    </div>
                    <h2 className={classNames(styles['Empty-Page-Title'], 'Empty-Page-Title')}>No Games</h2>
                    {/*  End Empty-Cell */}
                  </div>
                  {/* == END EMPTY GAMES LIST == */}

                  {/* == START FILL GAMES LIST == */}
                  <div className={classNames(styles['GamesList__Fill'], 'GamesList__Fill')}>
                    <div className={classNames(styles['GamesList__Header'], 'GamesList__Header')}>
                      <div className={classNames(styles['GamesList__Header-1'], 'GamesList__Header-1')}>
                        <TextInput value={'Search'} />
                      </div>
                      <div className={classNames(styles['GamesList__Header-2'], 'GamesList__Header-2')}>
                        <Button
                          type='button'
                          className={classNames(styles['GamesList__Add-Game-Btn'], 'GamesList__Add-Game-Btn')}>
                          <span
                            className={classNames(
                              styles['GamesList__Add-Game-Btn-Label'],
                              'GamesList__Add-Game-Btn-Label'
                            )}>
                            <i
                              className={classNames(
                                styles['GamesList__Add-Game-Btn--Icon'],
                                'GamesList__Add-Game-Btn--Icon'
                              )}>
                              +
                            </i>
                            Add Game
                          </span>
                        </Button>
                      </div>
                    </div>

                    <div className={classNames(styles['TagsCell'], 'TagsCell')}>
                      <Tag title='Lorem Ips(16)' closeIcon={false} inactive={false} />
                      <Tag title='Lorem Ips(16)' closeIcon={false} inactive={false} />
                      <Tag title='Lorem Ips(16)' closeIcon={false} inactive={false} />
                      <Tag title='Lore(66)' closeIcon={false} inactive={false} />
                      <Tag title='Lorem Ips(16)' closeIcon={false} inactive={false} />
                    </div>
                    {/* GamesContainer */}
                    <div className={classNames(styles['GamesContainer'], 'GamesContainer')}>
                      <CardImg title={'Phoenix Fortune'} image={'https://wallpaperaccess.com/full/1765659.jpg'} />
                      <CardImg title={'Diamond Link'} image={'https://wallpaperaccess.com/full/1765659.jpg'} />
                      <CardImg title={'Great America Wild'} image={'https://wallpaperaccess.com/full/1765659.jpg'} />
                      <CardImg title={'lucky spin jackpot'} image={'https://wallpaperaccess.com/full/1765659.jpg'} />
                      <CardImg title={'Phoenix Fortune'} image={'https://wallpaperaccess.com/full/1765659.jpg'} />
                      <CardImg title={'Diamond Link'} image={'https://wallpaperaccess.com/full/1765659.jpg'} />
                      <CardImg title={'Phoenix Fortune'} image={'https://wallpaperaccess.com/full/1765659.jpg'} />
                      <CardImg title={'Diamond Link'} image={'https://wallpaperaccess.com/full/1765659.jpg'} />
                      <CardImg title={'Great America Wild'} image={'https://wallpaperaccess.com/full/1765659.jpg'} />
                      <CardImg title={'lucky spin jackpot'} image={'https://wallpaperaccess.com/full/1765659.jpg'} />
                      <CardImg title={'Phoenix Fortune'} image={'https://wallpaperaccess.com/full/1765659.jpg'} />
                      <CardImg title={'Diamond Link'} image={'https://wallpaperaccess.com/full/1765659.jpg'} />
                      <CardImg title={'Joker Poker'} image={'https://wallpaperaccess.com/full/1765659.jpg'} />
                      <CardImg title={'Jacks Or Better'} image={'https://wallpaperaccess.com/full/1765659.jpg'} />
                      <CardImg title={'All American'} image={'https://wallpaperaccess.com/full/1765659.jpg'} />
                      <CardImg title={'Color Champion'} image={'https://wallpaperaccess.com/full/1765659.jpg'} />
                      <CardImg title={'Joker Poker'} image={'https://wallpaperaccess.com/full/1765659.jpg'} />
                      <CardImg title={'Jacks Or Better'} image={'https://wallpaperaccess.com/full/1765659.jpg'} />
                    </div>
                    {/* GamesContainer */}
                  </div>
                  {/* == END FILL GAMES LIST == */}
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
      {/* MainCarcass */}
    </div>
  );
};

export default typedMemo(GameDetails);
