import { LastActivityView, LastActivityViewProps, StatusView, StatusViewProps, TagsView, UserView } from '@/components';
import { UserViewProps } from '@/components/organisms/user-view/UserView';
import WalletView, { WalletViewProps } from '@/components/organisms/wallet-view/WalletView';
import { typedMemo } from '@/helpers';
import { Breadcrumb } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './PlayerDetails.module.scss';

export interface PlayerDetailsProps extends UserViewProps, WalletViewProps, StatusViewProps, LastActivityViewProps {}

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
          <UserView userInfo={userInfo} />

          <WalletView walletInfo={walletInfo} />

          <StatusView statusInfo={statusInfo} />

          <LastActivityView lastActivity={lastActivity} />

          <TagsView />
        </div>
        <div className={classNames(styles['PlayerDetailsBase--content-forms'])}>{children}</div>
      </div>
    </div>
  );
};

export default typedMemo(PlayerDetails);
