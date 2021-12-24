import { ItemDetails, NameDescription, StatusView, StatusViewProps } from '@/components';
import { NameAndId } from '@/components/molecules/name-and-id';
import UserProjects from '@/components/organisms/user-projects/UserProjects';
import { AvatarCard, Breadcrumb, BreadcrumbProps, Card } from '@my-ui/core';
import React, { FC, ReactNode } from 'react';
import styles from './UserDetails.module.scss';

export interface UserDetailsProps {
  statusInfo: Omit<StatusViewProps, 'label'>;
  breadCrumbs: BreadcrumbProps['links'];

  lastLoginDate: string;
  lastLoginIp: string;
  registeredFormIp: string;

  userName: string;
  userId: string;
  userImgUrl: string;
  createdBy: string;
  creationDate: string;

  translations: {
    status: string;
    lastLoginDate: string;
    lastLoginIp: string;
    registeredFormIp: string;
    generalInformation: string;
    wallet: string;
    projects: string;
    creationDate: string;
    createdBy: string;
  };

  generalInformationContext: ReactNode;
  userWalletsContent: ReactNode;
}

const UserDetails: FC<UserDetailsProps> = ({
  breadCrumbs,
  statusInfo,
  lastLoginDate,
  lastLoginIp,
  registeredFormIp,
  userName,
  creationDate,
  userId,
  userImgUrl,
  translations,
  createdBy,
  generalInformationContext,
  userWalletsContent
}) => {
  return (
    <>
      <Breadcrumb links={breadCrumbs} />
      <div className={styles.UserDetailsWrapper}>
        <div className={styles.AsideLeftContent}>
          <Card borderRadius={1.6} className={styles.CardName}>
            <AvatarCard avatarImg={userImgUrl} variant='default' imageSize='md' />
            <NameAndId name={userName} id={userId} />
          </Card>
          <div className={styles.StatusViewContainer}>
            <StatusView {...statusInfo} label={translations.status} />
          </div>
          <Card className={styles.CardDateContent}>
            <div>
              <NameDescription
                data={[
                  {
                    name: translations.lastLoginDate,
                    description: lastLoginDate
                  },
                  {
                    name: translations.lastLoginIp,
                    description: lastLoginIp
                  },
                  {
                    name: translations.registeredFormIp,
                    description: registeredFormIp
                  }
                ]}
              />
              <NameDescription
                data={[
                  {
                    name: translations.creationDate,
                    description: creationDate
                  },
                  {
                    name: translations.createdBy,
                    description: createdBy
                  }
                ]}
              />
            </div>
          </Card>
        </div>
        <div className={styles.AsideRightContent}>
          <ItemDetails
            tabs={[
              {
                title: translations.generalInformation,
                value: 1,
                content: generalInformationContext
              },
              {
                title: translations.wallet,
                value: 2,
                content: userWalletsContent
              },
              {
                title: 'Projects',
                value: 3,
                content: <UserProjects />
              }
            ]}
            defaultTabValue={1}
            defaultSubTabValue={1}
          />
        </div>
      </div>
    </>
  );
};

export default UserDetails;
