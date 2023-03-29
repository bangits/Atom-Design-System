import { Icons } from '@/atom-design-system';
import {
  FlexibleFormProps,
  ItemDetails,
  LastActivityViewProps,
  StatusView,
  StatusViewProps,
  UsedDevice,
  UsedDeviceProps
} from '@/components';
import { NameAndId } from '@/components/molecules/name-and-id';
import { LastActivityView } from '@/components/organisms/last-activity-view';
import { UserViewProps } from '@/components/organisms/user-view/UserView';
import { WalletViewProps } from '@/components/organisms/wallet-view/WalletView';
import { typedMemo } from '@/helpers';
import { UserMainIcon } from '@/icons';
import { AvatarCard, Breadcrumb, BreadcrumbProps, Card, SubTabProps } from '@my-ui/core';
import { TabProps } from '@my-ui/core/dist/components/tab/Tab';
import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import styles from './PlayerDetails.module.scss';

export interface PlayerDetailsProps extends UserViewProps, WalletViewProps, LastActivityViewProps, FlexibleFormProps {
  breadCrumbs: BreadcrumbProps['links'];
  usedDevices: UsedDeviceProps[];
  playerDetails: ReactNode;
  playerKPI: ReactNode;
  verifiedIcon?: boolean;
  usedDeviceLabel?: string;
  noDataText?: string;
  translations: {
    status: string;
    registeredFormIp: string;
    generalInformation: string;
    settings: string;
    wallet: string;
    projects: string;
    passwordContext: string;
    languagesContent: string;
    general: string;
    playerDetails: string;
    playerKPI: string;
    documents: string;
    games: string;
    finances: string;
    usedDeviceLabel: string;
    bonuses: string;
    noDataText: string;
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
  realWallet: ReactNode;
  promotionalWallet: ReactNode;
  selectContent: ReactNode;
  bonusesContent: ReactNode;
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
  usedDevices,
  translations,
  documents,
  realWallet,
  promotionalWallet,
  verifiedIcon,
  usedDeviceLabel,
  noDataText,
  selectContent,
  bonusesContent
}) => {
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
            {selectContent && selectContent}

            {verifiedIcon && (
              <div className={styles['CardName--verified']}>
                <Icons.PlayerVerifiedIcon />
              </div>
            )}
          </Card>

          {/* <WalletView walletInfo={walletInfo} /> */}

          <StatusView {...statusInfo} />
          <UsedDevice noDataText={noDataText} label={usedDeviceLabel} usedDevices={usedDevices} />
          <div className={styles.LastActivityViewWrapper}>
            <LastActivityView lastActivity={lastActivity} />
          </div>

          {/* <TagsView /> */}
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
                    }
                  ]
                },
                {
                  title: translations.documents,
                  value: 2,
                  content: documents
                },
                {
                  title: translations.wallet,
                  value: 3,
                  subTabs: [
                    {
                      title: 'Real',
                      value: 1,
                      content: realWallet
                    },
                    {
                      title: 'Promotional',
                      value: 2,
                      content: promotionalWallet
                    }
                  ]
                },
                {
                  title: translations.bonuses,
                  value: 4,
                  content: bonusesContent
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
