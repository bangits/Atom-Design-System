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
  NameDescriptionProps
} from '@/components';
import { IconsGroup } from '@/components/molecules/icons-group';
import { UserViewProps } from '@/components/organisms/user-view/UserView';

import WalletView, { WalletViewProps } from '@/components/organisms/wallet-view/WalletView';
import DetailsMainInfo, { DetailsMainInfoProps } from '@/components/organisms/details-main-info/DetailsMainInfo';
import { Button, ButtonProps } from '@my-ui/core';
import { typedMemo } from '@/helpers';
import { Breadcrumb, Card, IconButton, SubTab, Status, StatusProps, SubTabProps, Tab, Tag } from '@my-ui/core';
import { BreadcrumbProps } from '@my-ui/core/dist/components/navigation/breadcrumb/Breadcrumb';
import { TabProps } from '@my-ui/core/dist/components/tab/Tab';
import { TagCountry } from '@my-ui/core';

import classNames from 'classnames';
import React, { FC, useState } from 'react';
import styles from './GameDetails.module.scss';
import { DesktopIcon, TabletIcon, MobileIcon } from '@/icons';
export interface GameDetailsProps
  extends UserViewProps,
    WalletViewProps,
    StatusViewProps,
    LastActivityViewProps,
    DetailsMainInfoProps,
    ButtonProps,
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
      <div className={classNames(styles['GameDetailsBase--breadCrumb'])}>
        <Breadcrumb links={breadCrumb.links} />
      </div>
      <div className={classNames(styles['GameDetailsBase--content'])}>
        <div className={classNames(styles['GameDetailsUserInfo--content-info'])}>
          <DetailsMainInfo
            label='Shining Crown'
            id='ID1234567'
            src='https://www.casinowow.com/media/uploads/Shining-Crown-Icon-190x190.png'
          />

          <StatusView
            statusInfo={{
              label: 'Status',
              statusLabel: 'Active',
              actions: [
                {
                  iconName: 'LogOutIcon',
                  onClick: () => {}
                  // tooltipText: 'Terminate'
                }
              ]
            }}
          />

          <div className={classNames(styles['GameDetailsBase__Changes-Date'], 'GameDetailsBase__Changes-Date')}>
            <NameDescription data={docInfo.data} title={docInfo.title}></NameDescription>
          </div>

          <div className={classNames(styles['GameDetailsBase__Btn-Cell'])}>
            <Button>Play</Button>
            <Button variant='ghost'>Play Demo</Button>
          </div>
        </div>

        <Card className={classNames(styles['GameDetailsBase--content-control'])} borderRadius={1.6}>
          <div className={classNames(styles['GameDetailsBase--content-control__tabs'])}>
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
          </div>

          {tabValue === 1 && subTabValue === 1 && (
            <div className={classNames(styles['GameDetailsBase--content-control__forms'])}>
              <div style={{ position: 'absolute', right: -16, bottom: 120, zIndex: 40 }}>
                <IconsGroup
                  icons={[
                    {
                      icon: (
                        <svg data-name='Component 62 – 4' xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
                          <path data-name='Rectangle 920' fill='none' d='M0 0h24v24H0z' />
                          <g data-name='eye (1)'>
                            <path
                              data-name='Path 1941'
                              d='M8 98.725a10 10 0 0 0-7.875 4.363.627.627 0 0 0 0 .752A9.991 9.991 0 0 0 8 108.206a10 10 0 0 0 7.875-4.363.627.627 0 0 0 0-.752A9.991 9.991 0 0 0 8 98.725zm.219 8.079a3.346 3.346 0 1 1 3.139-3.12 3.357 3.357 0 0 1-3.139 3.116zm-.1-1.542a1.8 1.8 0 1 1 1.691-1.682 1.8 1.8 0 0 1-1.692 1.682z'
                              transform='translate(4 -91.466)'
                              fill='currentColor'
                            />
                          </g>
                        </svg>
                      )
                    },
                    {
                      icon: (
                        <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24'>
                          <path
                            fill='currentColor'
                            d='M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z'
                          />
                        </svg>
                      ),
                      isActive: true
                    },
                    {
                      icon: (
                        <svg
                          id='Component_64_10'
                          data-name='Component 64 – 10'
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'>
                          <rect id='Rectangle_918' data-name='Rectangle 918' width='24' height='24' fill='none' />
                          <g id='off-button' transform='translate(5 5)'>
                            <g id='Group_2179' data-name='Group 2179'>
                              <path
                                id='Path_3510'
                                data-name='Path 3510'
                                d='M7,0a7,7,0,1,0,7,7A7.008,7.008,0,0,0,7,0ZM6.364,3.182a.636.636,0,0,1,1.273,0V5.909a.636.636,0,0,1-1.273,0ZM7,11.455A4.046,4.046,0,0,1,3.979,4.718a.636.636,0,1,1,.95.847,2.773,2.773,0,1,0,4.141,0,.636.636,0,0,1,.95-.847A4.046,4.046,0,0,1,7,11.455Z'
                                fill='currentColor'
                              />
                            </g>
                          </g>
                        </svg>
                      )
                    }
                  ]}
                />
              </div>
              {/*  */}
              <div className={classNames(styles['GameDetailsBase__Row'], 'GameDetailsBase__Row')}>
                {/*  */}
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

                <div
                  className={classNames(
                    styles['GameDetailsBase__Other-Elements-Cell'],
                    'GameDetailsBase__Other-Elements-Cell'
                  )}>
                  <div className={classNames(styles['GameDetailsBase__Tags-Cell'], 'GameDetailsBase__Tags-Cell')}>
                    <Tag title='Armenia' closeIcon={false} inactive={false} />
                    <Tag title='Armenia' closeIcon={false} inactive={false} />
                    <Tag title='Armenia' closeIcon={false} inactive={false} />
                  </div>

                  <div className={classNames(styles['GameDetailsBase__Tags-Cell'], 'GameDetailsBase__Tags-Cell')}>
                    <TagCountry />
                    <TagCountry />
                    <TagCountry />
                  </div>

                  <div className={classNames(styles['GameDetailsBase__Tags-Cell'], 'GameDetailsBase__Tags-Cell')}>
                    <Tag title='YEN' inactive className={styles.Currency} />
                    <Tag title='EUR' inactive className={styles.Currency} />
                    <Tag title='USD' inactive className={styles.Currency} />
                  </div>

                  <span className={classNames(styles['GameDetailsBase__Device-Tag'], 'GameDetailsBase__Device-Tag')}>
                    <MobileIcon width='10px' />
                    <span
                      className={classNames(
                        styles['GameDetailsBase__Device-Tag-Label'],
                        'GameDetailsBase__Device-Tag-Label'
                      )}>
                      Mobile
                    </span>
                  </span>

                  <span className={classNames(styles['GameDetailsBase__Device-Tag'], 'GameDetailsBase__Device-Tag')}>
                    <TabletIcon width='20px' />
                    <span
                      className={classNames(
                        styles['GameDetailsBase__Device-Tag-Label'],
                        'GameDetailsBase__Device-Tag-Label'
                      )}>
                      Tablet
                    </span>
                  </span>

                  <span className={classNames(styles['GameDetailsBase__Device-Tag'], 'GameDetailsBase__Device-Tag')}>
                    <DesktopIcon width='22px' />
                    <span
                      className={classNames(
                        styles['GameDetailsBase__Device-Tag-Label'],
                        'GameDetailsBase__Device-Tag-Label'
                      )}>
                      Desktop
                    </span>
                  </span>

                  {/* GameDetailsBase__Device-Tag */}
                </div>
              </div>
              {/* NEXT COMPONENT */}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default typedMemo(GameDetails);
