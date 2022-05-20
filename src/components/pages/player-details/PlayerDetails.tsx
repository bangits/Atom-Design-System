import {
  FlexibleFormProps,
  ItemDetails,
  LastActivityViewProps,
  StatusView,
  StatusViewProps,
  TagsView,
  UsedDevice,
  UsedDeviceProps
} from '@/components';
import { NameAndId } from '@/components/molecules/name-and-id';
import { LastActivityView } from '@/components/organisms/last-activity-view';
import { WalletView } from '@/components/organisms/wallet-view';
import { WalletViewProps } from '@/components/organisms/wallet-view/WalletView';
import { typedMemo } from '@/helpers';
import { UserMainIcon } from '@/icons';
import { AvatarCard, Breadcrumb, BreadcrumbProps, Card, SubTabProps } from '@my-ui/core';
import { TabProps } from '@my-ui/core/dist/components/tab/Tab';
import classNames from 'classnames';
import React, { FC, ReactNode, useState } from 'react';
import styles from './PlayerDetails.module.scss';

export interface PlayerDetailsProps extends WalletViewProps, LastActivityViewProps, FlexibleFormProps {
  breadCrumbs: BreadcrumbProps['links'];
  createdBy: string;
  creationDate: string;
  usedDevice: UsedDeviceProps;
  playerDetails: ReactNode;
  playerKPI: ReactNode;

  translations: {
    status: string;
    registeredFormIp: string;
    generalInformation: string;
    settings: string;
    wallet: string;
    projects: string;
    creationDate: string;
    createdBy: string;
    passwordContext: string;
    languagesContent: string;
    general: string;
    playerDetails: string;
    playerKPI: string;
    documents: string;
    games: string;
    finances: string;
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
  userImgUrl: string;
  userName: string;
  userId: number;
  documents: ReactNode;
}

const PlayerDetails: FC<PlayerDetailsProps> = ({
  playerKPI,
  playerDetails,
  walletInfo,
  statusInfo,
  lastActivity,
  breadCrumbs,
  userImgUrl,
  tabs,
  userName,
  userId,
  usedDevice,
  translations,
  documents
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
          <Card borderRadius={1.6} className={styles.CardName}>
            {userImgUrl ? (
              <AvatarCard avatarImg={userImgUrl} variant='default' imageSize='md' />
            ) : (
              <div className={styles['CardName--avatar']}>
                <UserMainIcon />
              </div>
            )}
            <NameAndId name={userName} id={userId} />
          </Card>

          <WalletView walletInfo={walletInfo} />

          <StatusView {...statusInfo} />
          <UsedDevice {...usedDevice} />
          <div className={styles.LastActivityViewWrapper}>
            <LastActivityView lastActivity={lastActivity} />
          </div>

          <TagsView />
        </div>
        <Card className={classNames(styles['PlayerDetailsBase--content-control'])} borderRadius={1.6}>
          <div className={styles['PartnerDetailsBase__Main-Content']}>
            <ItemDetails
              tabs={[
                {
                  title: translations.general,
                  value: 1,
                  subTabs: [
                    {
                      title: translations.playerDetails,
                      value: 1,
                      content: playerDetails
                    },
                    {
                      title: translations.playerKPI,
                      value: 2,
                      content: playerKPI
                    }
                  ]
                },
                {
                  title: translations.games,
                  value: 2,
                  content: documents
                }
              ]}
              defaultTabValue={1}
              defaultSubTabValue={1}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default typedMemo(PlayerDetails);
