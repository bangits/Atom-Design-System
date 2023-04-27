import { ItemDetails, NameDescription, StatusView, StatusViewProps } from '@/components';
import { NameAndId } from '@/components/molecules/name-and-id';
import { UserMainIcon } from '@/icons';
import { AvatarCard, Breadcrumb, BreadcrumbProps, Card } from '@my-ui/core';
import { FC, ReactNode } from 'react';
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
  lastUpdatedBy: string;
  creationDate: string;

  translations: {
    status: string;
    lastLoginDate: string;
    lastLoginIp: string;
    registeredFormIp: string;
    generalInformation: string;
    settings: string;
    wallet: string;
    projects: string;
    creationDate: string;
    createdBy: string;
    passwordContext: string;
    languagesContent: string;
    commissionPlan: string;
    link: string;
    roleAndPermission: string;
    permissions: string;
    roles: string;
    lastUpdatedBy: string;
  };

  generalInformationContext: ReactNode;
  passwordContext: ReactNode;
  languagesContent: ReactNode;
  userWalletsContent: ReactNode;
  commissionPlansContent?: ReactNode;
  linksContext?: ReactNode;
  permissionsContent?: ReactNode;
  rolesContent?: ReactNode;
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
  lastUpdatedBy,
  generalInformationContext,
  userWalletsContent,
  languagesContent,
  commissionPlansContent,
  linksContext,
  rolesContent,
  permissionsContent
}) => {
  return (
    <>
      <Breadcrumb links={breadCrumbs} />
      <div className={styles.UserDetailsWrapper}>
        <div className={styles.AsideLeftContent}>
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
          <div className={styles.StatusViewContainer}>
            <StatusView {...statusInfo} label={translations.status} />
          </div>
          <Card className={styles.CardDateContent}>
            <div className={styles.NameDescriptionsBlock}>
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
                  },
                  {
                    name: translations.lastUpdatedBy,
                    description: lastUpdatedBy
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
                title: translations.roleAndPermission,
                value: 2,
                subTabs: [
                  {
                    title: translations.roles,
                    value: 1,
                    content: rolesContent
                  },
                  {
                    title: translations.permissions,
                    value: 2,
                    content: permissionsContent
                  }
                ]
              },
              {
                title: translations.wallet,
                value: 3,
                content: userWalletsContent
              },
              commissionPlansContent && {
                title: translations.commissionPlan,
                value: 4,
                content: commissionPlansContent
              },
              linksContext && {
                title: translations.link,
                value: 5,
                content: linksContext
              },
              {
                title: translations.settings,
                value: 6,
                subTabs: [
                  {
                    title: translations.languagesContent,
                    value: 1,
                    content: languagesContent
                  }
                  // {
                  //   title: translations.passwordContext,
                  //   value: 3,
                  //   content: passwordContext
                  // },
                ]
              }

              // {
              //   title: 'Projects',
              //   value: 3,
              //   content: <UserProjects />
              // },
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
