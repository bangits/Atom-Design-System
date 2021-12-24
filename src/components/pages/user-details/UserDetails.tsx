import { Icons } from '@/atom-design-system';
import { ItemDetails, NameDescription, StatusView, StatusViewProps } from '@/components';
import { NameAndId } from '@/components/molecules/name-and-id';
import UserProjects from '@/components/organisms/user-projects/UserProjects';
import { CloseIcon, UserMainIcon } from '@/icons';
import { AvatarCard, Breadcrumb, BreadcrumbProps, Button, Card, Select, Table } from '@my-ui/core';
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
  walletTabContent: ReactNode;
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
  walletTabContent
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
                content: (
                  <div className={styles.UserDetailsTableContent}>
                    <Table
                      columns={[
                        {
                          Header: 'currency',
                          accessor: 'x',
                          disableSortBy: true
                        },
                        {
                          Header: 'balance',
                          accessor: 'y',
                          disableSortBy: true
                        },
                        {
                          Header: 'account Id',
                          accessor: 'z',
                          disableSortBy: true
                        },
                        {
                          Header: 'type',
                          accessor: 'z',
                          disableSortBy: true
                        }
                      ]}
                      data={[
                        {
                          y: 'ID1234567',
                          z: 'ID1234567',
                          b: '20BurningHot',
                          n: 'EGT',
                          w: '12/07/2021, 12:00:00',
                          e: 'Mobile Desktop',
                          v: 'Mobile, Desktop',
                          c: 'Slots'
                        },
                        {
                          y: 'ID1234567',
                          z: 'ID1234567',
                          b: '20BurningHot',
                          n: 'EGT',
                          w: '12/07/2021, 12:00:00',
                          e: 'Mobile Desktop',
                          v: 'Mobile, Desktop',
                          c: 'Slots'
                        },
                        {
                          y: 'ID1234567',
                          z: 'ID1234567',
                          b: '20BurningHot',
                          n: 'EGT',
                          w: '12/07/2021, 12:00:00',
                          e: 'Mobile Desktop',
                          v: 'Mobile, Desktop',
                          c: 'Slots'
                        }
                      ]}
                      className={styles.UserDetailsTable}
                    />
                    <Button variant='link' startIcon={<Icons.PlusCircleLarge />} className={styles.AddButton}>
                      Add Wallet
                    </Button>
                    <div className={styles.SelectContent}>
                      <Select
                        options={[
                          {
                            label: 'Game data',
                            value: 7
                          },
                          {
                            label: 'Provider',
                            value: 8
                          },
                          {
                            label: 'Theme',
                            value: 9
                          },
                          {
                            label: 'Type',
                            value: 10
                          },
                          {
                            label: 'Provider',
                            value: 11
                          },
                          {
                            label: 'Theme',
                            value: 12
                          },
                          {
                            label: 'Type',
                            value: 13
                          },
                          {
                            label: 'Subtype',
                            value: 14
                          },
                          {
                            label: 'Provider',
                            value: 15
                          },
                          {
                            label: 'Theme',
                            value: 16
                          },
                          {
                            label: 'Type',
                            value: 17
                          }
                        ]}
                      />
                      <CloseIcon className={styles.CloseIcon} />
                    </div>
                  </div>
                )
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
