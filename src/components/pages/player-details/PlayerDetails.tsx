import {
  FlexibleForm,
  FlexibleFormProps,
  LastActivityView,
  LastActivityViewProps,
  StatusView,
  StatusViewProps,
  TagsView,
  UserView
} from '@/components';
import { IconsGroup } from '@/components/molecules/icons-group';
import { UserViewProps } from '@/components/organisms/user-view/UserView';
import WalletView, { WalletViewProps } from '@/components/organisms/wallet-view/WalletView';
import { typedMemo } from '@/helpers';
import { Breadcrumb, Card, SubTab, SubTabProps, Tab } from '@my-ui/core';
import { BreadcrumbProps } from '@my-ui/core/dist/components/navigation/breadcrumb/Breadcrumb';
import { TabProps } from '@my-ui/core/dist/components/tab/Tab';
import classNames from 'classnames';
import React, { FC, useState } from 'react';
import styles from './PlayerDetails.module.scss';

export interface PlayerDetailsProps
  extends UserViewProps,
    WalletViewProps,
    StatusViewProps,
    LastActivityViewProps,
    FlexibleFormProps {
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

const PlayerDetails: FC<PlayerDetailsProps> = ({
  userInfo,
  walletInfo,
  statusInfo,
  lastActivity,
  breadCrumb,
  tabs
}) => {
  const [tabValue, setTabValue] = useState(1);
  const [subTabValue, setSubTabValue] = useState(1);
  const [edit, setEdit] = useState(false);

  const [date, setDate] = useState<Date | null>(null);

  return (
    <div className={classNames(styles.PlayerDetailsBase)}>
      <div className={classNames(styles['PlayerDetailsBase--breadCrumb'])}>
        <Breadcrumb links={breadCrumb.links} />
      </div>
      <div className={classNames(styles['PlayerDetailsBase--content'])}>
        <div className={classNames(styles['PlayerDetailsUserInfo--content-info'])}>
          <UserView userInfo={userInfo} />

          <WalletView walletInfo={walletInfo} />

          <StatusView statusInfo={statusInfo} />

          <LastActivityView lastActivity={lastActivity} />

          <TagsView />
        </div>

        {/* <ItemDetails
          tabs={[
            {
              title: '',
              value: 1,
              content: <></>,
              subTabs: [
                {
                  title: '',
                  value: 1,
                  content: <></>
                }
              ]
            }
          ]}
        /> */}
        <Card className={classNames(styles['PlayerDetailsBase--content-control'])} borderRadius={1.6}>
          <div className={classNames(styles['PlayerDetailsBase--content-control__tabs'])}>
            <Tab
              options={[
                {
                  title: 'General',
                  value: 1
                },
                {
                  title: 'Games',
                  value: 2
                },
                {
                  title: 'Finances',
                  value: 3
                },
                {
                  title: 'Transactions',
                  value: 4
                },
                {
                  title: 'Bonuses',
                  value: 5
                },
                {
                  title: 'Restrictions',
                  value: 6
                },
                {
                  title: 'Player activity',
                  value: 7
                }
              ]}
              defaultValue={1}
              onChange={(value) => setTabValue(value)}
            />
            <div className={classNames(styles['PlayerDetailsBase--content-control__sub-tabs'])}>
              {tabValue === 1 && (
                <SubTab
                  options={[
                    { title: 'Player Details', value: 1, badgeCount: 0 },
                    { title: 'Player KPIs', value: 2, badgeCount: 0 },
                    { title: 'Documents', value: 3, badgeCount: 0 },
                    { title: 'Messages', value: 4, badgeCount: 130 },
                    { title: 'Notes', value: 5, badgeCount: 32 }
                  ]}
                  defaultValue={subTabValue}
                  onChange={(value) => setSubTabValue(value)}
                />
              )}
            </div>
          </div>

          {tabValue === 1 && subTabValue === 1 && (
            <div className={classNames(styles['PlayerDetailsBase--content-control__forms'])}>
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

              <FlexibleForm
                editFormProps={{
                  title: 'Account Information',

                  renderInputs: (Component, name) => {
                    return <Component />;
                  },
                  fields: [
                    {
                      type: 'input',
                      name: 'email',
                      props: {
                        label: 'Email',
                        defaultValue: 'Antonian.evgenia@gmail.com'
                      }
                    },
                    {
                      type: 'input',
                      name: 'username',
                      props: {
                        label: 'Username',
                        defaultValue: 'Eva12345'
                      }
                    },
                    {
                      type: 'select',
                      name: 'currency',
                      disabled: true,
                      props: {
                        inputLabel: 'Currency',
                        options: [
                          { label: 'AMD', value: 1 },
                          { label: 'USD', value: 2 },
                          { label: 'EUR', value: 3 }
                        ],
                        isSearchable: true,
                        isMulti: true,
                        defaultValue: [1]
                      }
                    },
                    {
                      type: 'input',
                      name: 'status',
                      props: {
                        label: 'Status',
                        defaultValue: 'Active'
                      },
                      disabled: true
                    },
                    {
                      type: 'input',
                      name: 'segments',
                      props: {
                        label: 'Segments',
                        defaultValue: 'Forever'
                      }
                    },
                    {
                      type: 'input',
                      name: 'btag',
                      props: {
                        label: 'Btag',
                        defaultValue: '111.123.56.85'
                      },
                      disabled: true
                    },
                    {
                      type: 'input',
                      name: 'regSRC',
                      props: {
                        label: 'Registration Source',
                        defaultValue: 'Forever'
                      },
                      disabled: true
                    },
                    {
                      type: 'input',
                      name: 'created',
                      props: {
                        label: 'Created By',
                        defaultValue: 'Inesa Khachatryan'
                      },
                      disabled: true
                    },

                    {
                      type: 'datePicker',
                      name: 'datepicker',
                      props: {
                        onChange: (date: Date) => setDate(date),
                        placeholderText: 'dd/mm/yyyy',
                        dateFormat: 'dd/MM/yyyy',
                        selected: date || new Date()
                      }
                    },
                    {
                      type: 'input',
                      name: 'form',
                      props: {
                        label: 'Registration Form IP',
                        defaultValue: 'No'
                      },
                      disabled: true
                    }
                  ]
                }}
                editedFormProps={{
                  options: [
                    { title: 'Owner', variant: 'label' },
                    { title: 'Email', value: 'antonian.evgenia@gmail.com', variant: 'default' },
                    {
                      title: 'Username',
                      value: 'Eva123456',
                      variant: 'default'
                    },
                    {
                      title: 'Currency',
                      value: 'USD',
                      variant: 'bold'
                    },

                    {
                      title: 'Created By',
                      value: ['Jackpot Support', 'Jewels and Gems', 'Jewels'],
                      variant: 'tag'
                    },
                    {
                      title: 'Status',
                      value: 'Active',
                      variant: 'default'
                    },
                    {
                      title: 'Segment',
                      value: 'Vip Players',
                      variant: 'default'
                    },
                    {
                      title: 'Btag',
                      value: '111.123.56.85',
                      variant: 'default'
                    },
                    {
                      title: 'Registration Source',
                      value: '09/05/2021 12:00:00',
                      variant: 'default'
                    },
                    {
                      title: 'Created By',
                      value: 'Inesa Khachatryan',
                      variant: 'default'
                    }
                  ],
                  title: 'Account Information'
                }}
                isEdit={edit}
              />

              <FlexibleForm
                editedFormProps={{
                  options: [
                    { title: 'Owner', variant: 'label' },
                    { title: 'Email', value: 'antonian.evgenia@gmail.com', variant: 'default' },
                    {
                      title: 'Username',
                      value: 'Eva123456',
                      variant: 'default'
                    },
                    {
                      title: 'Currency',
                      value: 'USD',
                      variant: 'bold'
                    },

                    {
                      title: 'Created By',
                      value: ['Jackpot Support', 'Jewels and Gems', 'Jewels'],
                      variant: 'tag'
                    },
                    {
                      title: 'Status',
                      value: 'Active',
                      variant: 'default'
                    },
                    {
                      title: 'Segment',
                      value: 'Vip Players',
                      variant: 'default'
                    },
                    {
                      title: 'Btag',
                      value: '111.123.56.85',
                      variant: 'default'
                    },
                    {
                      title: 'Registration Source',
                      value: '09/05/2021 12:00:00',
                      variant: 'default'
                    },
                    {
                      title: 'Created By',
                      value: 'Inesa Khachatryan',
                      variant: 'default'
                    }
                  ],
                  title: 'Personal Information'
                }}
              />

              <FlexibleForm
                editedFormProps={{
                  options: [
                    { title: 'Owner', variant: 'label' },
                    { title: 'Email', value: 'antonian.evgenia@gmail.com', variant: 'default' },
                    {
                      title: 'Username',
                      value: 'Eva123456',
                      variant: 'default'
                    },
                    {
                      title: 'Currency',
                      value: 'USD',
                      variant: 'bold'
                    },

                    {
                      title: 'Created By',
                      value: ['Jackpot Support', 'Jewels and Gems', 'Jewels'],
                      variant: 'tag'
                    },
                    {
                      title: 'Status',
                      value: 'Active',
                      variant: 'default'
                    },
                    {
                      title: 'Segment',
                      value: 'Vip Players',
                      variant: 'default'
                    },
                    {
                      title: 'Btag',
                      value: '111.123.56.85',
                      variant: 'default'
                    },
                    {
                      title: 'Registration Source',
                      value: '09/05/2021 12:00:00',
                      variant: 'default'
                    },
                    {
                      title: 'Created By',
                      value: 'Inesa Khachatryan',
                      variant: 'default'
                    }
                  ],
                  title: 'Contacts'
                }}
              />
              <FlexibleForm
                editedFormProps={{
                  options: [
                    { title: 'Owner', variant: 'label' },
                    { title: 'Email', value: 'antonian.evgenia@gmail.com', variant: 'default' },
                    {
                      title: 'Username',
                      value: 'Eva123456',
                      variant: 'default'
                    },
                    {
                      title: 'Currency',
                      value: 'USD',
                      variant: 'bold'
                    },

                    {
                      title: 'Created By',
                      value: ['Jackpot Support', 'Jewels and Gems', 'Jewels'],
                      variant: 'tag'
                    },
                    {
                      title: 'Status',
                      value: 'Active',
                      variant: 'default'
                    },
                    {
                      title: 'Segment',
                      value: 'Vip Players',
                      variant: 'default'
                    },
                    {
                      title: 'Btag',
                      value: '111.123.56.85',
                      variant: 'default'
                    },
                    {
                      title: 'Registration Source',
                      value: '09/05/2021 12:00:00',
                      variant: 'default'
                    },
                    {
                      title: 'Created By',
                      value: 'Inesa Khachatryan',
                      variant: 'default'
                    }
                  ],
                  title: 'Verifications'
                }}
              />
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default typedMemo(PlayerDetails);
