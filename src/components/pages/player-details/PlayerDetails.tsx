import { typedMemo } from '@/helpers';
import { AvatarCard, Breadcrumb, Button, Card, Status, StatusProps, Tag } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './PlayerDetails.module.scss';

export interface StatusInfo extends StatusProps {
  label: string;
  statusLabel: string;
}

export interface PlayerDetailsProps {
  userInfo: {
    avatar?: {
      imageSrc: string;
      status: 'online' | 'offline';
    };
    title: string;
    id: string | number;
    userName: string;
    regInfo: string;
  };
  walletInfo: {
    title: string;
    realBalance: {
      label: string;
      balance: number | string;
      subBalance: {
        label: string;
        balance: number | string;
      }[];
    };
    bonusBalance: {
      label: string;
      balance: number | string;
    };
    totalBalance: {
      label: string;
      balance: number | string;
    };
  };
  statusInfo: StatusInfo;
  lastActivity: {
    title: string;
    info: {
      label: string;
      date: string | number;
    }[];
  };
}

const PlayerDetails: FC<PlayerDetailsProps> = ({ children, userInfo, walletInfo, statusInfo, lastActivity }) => {
  return (
    <div className={classNames(styles.PlayerDetailsBase)}>
      <div className={classNames(styles['PlayerDetailsBase--breadCrumb'])}>
        <Breadcrumb
          links={[
            {
              label: 'Player Management',
              isRedirect: true
            },
            {
              label: 'Player Details'
            }
          ]}
        />
      </div>
      <div className={classNames(styles['PlayerDetailsBase--content'])}>
        <div className={classNames(styles['PlayerDetailsUserInfo--content-info'])}>
          <Card borderRadius={1.6} className={classNames(styles['PlayerDetailsUserInfo--user'])}>
            <div className={classNames(styles['PlayerDetailsUserInfo--user-detailsContainer'])}>
              <div className={classNames(styles['PlayerDetailsUserInfo--user-avatarContainer'])}>
                <AvatarCard
                  avatarImg='https://cdn.celebsagewiki.com/images/22/tatul-avoyan.jpg'
                  imageSize='sm'
                  variant='online'
                />
              </div>
              <div className={classNames(styles['PlayerDetailsUserInfo--user-details'])}>
                <span>{userInfo.title}</span>
                <span>{userInfo.id}</span>
              </div>
            </div>
            <div className={classNames(styles['PlayerDetailsUserInfo--user-info'])}>
              <span>{userInfo.regInfo}</span>
              <span>{userInfo.userName}</span>
            </div>
          </Card>

          <Card borderRadius={1.6} className={classNames(styles.PlayerDetailsWalletInfo)}>
            <div className={classNames(styles['PlayerDetailsWalletInfo--title'])}>{walletInfo.title}</div>
            <div className={classNames(styles['PlayerDetailsWalletInfo--realBalance'])}>
              <div>
                <span>{walletInfo.realBalance.label}</span> <span>{walletInfo.realBalance.balance}</span>
              </div>
              <ul>
                {walletInfo.realBalance.subBalance.map((sub) => (
                  <li key={sub.label}>
                    <span>{sub.label}</span>
                    <span>{sub.balance}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={classNames(styles['PlayerDetailsWalletInfo--bonusBalance'])}>
              <span>{walletInfo.bonusBalance.label}</span>
              <span>{walletInfo.bonusBalance.balance}</span>
            </div>
            <div className={classNames(styles['PlayerDetailsWalletInfo--totalBalance'])}>
              <span>{walletInfo.totalBalance.label}</span>
              <span>{walletInfo.totalBalance.balance}</span>
            </div>
          </Card>

          <Card borderRadius={1.6} className={classNames(styles.PlayerDetailsStatusInfo)}>
            <span>{statusInfo.label}</span>
            <Status variant={statusInfo.variant}>{statusInfo.statusLabel}</Status>
          </Card>

          <Card borderRadius={1.6} className={classNames(styles.PlayerDetailsLastActivity)}>
            <span>{lastActivity.title}</span>
            <div className={classNames(styles['PlayerDetailsLastActivity--container'])}>
              {lastActivity.info.map((i) => (
                <div key={i.label}>
                  <span className={classNames(styles['PlayerDetailsLastActivity--label'])}>{i.label}</span>
                  <span className={classNames(styles['PlayerDetailsLastActivity--date'])}>{i.date}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card borderRadius={1.6} className={classNames(styles.PlayerDetailsTags)}>
            <span className={classNames(styles['PlayerDetailsTags--title'])}>Tags</span>
            <div className={classNames(styles['PlayerDetailsTags--container'])}>
              <div>
                <Tag title='Lorem Ip' closeIcon className={styles['PlayerDetailsTags--tag']} />
              </div>
              <div>
                <Tag title='Lorem Ip' closeIcon className={classNames(styles['PlayerDetailsTags--tag'])} />
              </div>
              <div>
                <Tag title='Lorem Ip' closeIcon className={classNames(styles['PlayerDetailsTags--tag'])} />
              </div>
              <div>
                <Button
                  variant='ghost'
                  className={styles['PlayerDetailsTags--button']}
                  startIcon={
                    <svg xmlns='http://www.w3.org/2000/svg' width='9.424' height='9.424' viewBox='0 0 9.424 9.424'>
                      <g id='Group_23677' data-name='Group 23677' transform='translate(-717.284 -219.283)'>
                        <path
                          id='close'
                          d='M3.943,3.332,6.537.737a.432.432,0,0,0-.61-.61L3.332,2.722.737.127a.432.432,0,0,0-.61.61L2.722,3.332.127,5.927a.432.432,0,1,0,.61.61L3.332,3.943,5.927,6.537a.432.432,0,0,0,.61-.61Zm0,0'
                          transform='translate(717.284 223.996) rotate(-45)'
                          fill='#3C54B2'
                        />
                      </g>
                    </svg>
                  }>
                  <span>Add New</span>
                </Button>
              </div>
            </div>
          </Card>
        </div>
        <div className={classNames(styles['PlayerDetailsBase--content-forms'])}>{children}</div>
      </div>
    </div>
  );
};

export default typedMemo(PlayerDetails);
