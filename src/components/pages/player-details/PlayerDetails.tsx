import { FlexibleFormProps, LastActivityViewProps, StatusView, StatusViewProps, TagsView } from '@/components';
import { IconsGroup } from '@/components/molecules/icons-group';
import { UserViewProps } from '@/components/organisms/user-view/UserView';
import { WalletViewProps } from '@/components/organisms/wallet-view/WalletView';
import { typedMemo } from '@/helpers';
import { Breadcrumb, BreadcrumbProps, Card, SubTab, SubTabProps, Tab } from '@my-ui/core';
import { TabProps } from '@my-ui/core/dist/components/tab/Tab';
import classNames from 'classnames';
import React, { FC, useState } from 'react';
import styles from './PlayerDetails.module.scss';

export interface PlayerDetailsProps extends UserViewProps, WalletViewProps, LastActivityViewProps, FlexibleFormProps {
  breadCrumbs: BreadcrumbProps['links'];
  createdBy: string;
  creationDate: string;
  lastLoginDate: string;
  lastLoginSession: string;

  translations: {
    status: string;
    lastLoginDate: string;
    lastLoginSession: string;
    registeredFormIp: string;
    generalInformation: string;
    settings: string;
    wallet: string;
    projects: string;
    creationDate: string;
    createdBy: string;
    passwordContext: string;
    languagesContent: string;
  };
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
  statusInfo: StatusViewProps;
}

const PlayerDetails: FC<PlayerDetailsProps> = ({
  userInfo,
  walletInfo,
  statusInfo,
  lastActivity,
  breadCrumbs,
  tabs
}) => {
  const [tabValue, setTabValue] = useState(1);
  const [subTabValue, setSubTabValue] = useState(1);
  const [edit, setEdit] = useState(false);

  const [date, setDate] = useState<Date | null>(null);

  return (
    <div className={classNames(styles.PlayerDetailsBase)}>
      <div className={classNames(styles['PlayerDetailsBase--breadCrumb'])}>
        <Breadcrumb links={breadCrumbs} />
      </div>
      <div className={classNames(styles['PlayerDetailsBase--content'])}>
        <div className={classNames(styles['PlayerDetailsUserInfo--content-info'])}>
          {/* <UserView userInfo={userInfo} /> */}

          {/* <WalletView walletInfo={walletInfo} /> */}

          <StatusView {...statusInfo} />

          {/* <div className={styles.LastActivityViewWrapper}>
            <LastActivityView lastActivity={lastActivity} />
          </div> */}

          <TagsView />
        </div>
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
                    { title: 'Player Details', value: 1 },
                    { title: 'Player KPIs', value: 2 },
                    { title: 'Documents', value: 3 },
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
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default typedMemo(PlayerDetails);
