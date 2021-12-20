import { Icons } from '@/atom-design-system';
import { ItemDetails, NameDescription, StatusView } from '@/components';
import { NameAndId } from '@/components/molecules/name-and-id';
import UserMainInfo from '@/components/molecules/user-main-info/UserMainInfo';
import UserProjects from '@/components/organisms/user-projects/UserProjects';
import { CloseIcon } from '@/icons';
import { Breadcrumb, Button, Card, Select, Table } from '@my-ui/core';
import React from 'react';
import styles from './UserDetails.module.scss';

const UserDetails = () => {
  return (
    <>
      <Breadcrumb
        links={[
          {
            label: 'User Managment',
            isRedirect: true
          },
          {
            label: 'User Details'
          }
        ]}
      />
      <div className={styles.UserDetailsWrapper}>
        <div className={styles.AsideLeftContent}>
          <Card borderRadius={1.6} className={styles.CardName}>
            <UserMainInfo className={styles.UserMainInfo} />
            <NameAndId name='Inesa Khachatryan' id='ID 1234567' />
          </Card>
          <div className={styles.StatusViewContainer}>
            <StatusView
              label='status'
              statusLabel='Expired'
              actions={[{ iconName: 'LogOutIcon', onClick: () => {}, tooltipText: 'Terminate' }]}
            />
          </div>
          <Card className={styles.CardDateContent}>
            <div>
              <NameDescription
                data={[
                  {
                    name: 'Last Login Date',
                    description: '12/01/2021'
                  },
                  {
                    name: 'Last Login IP',
                    description: '192.158.1.38'
                  },
                  {
                    name: 'Registered From IP:',
                    description: '192.158.1.38'
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
                title: 'General Information',
                value: 1,
                content: <div>General Information</div>
              },
              {
                title: 'Wallets',
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
                    {/* {PlusCircleLarge is not ready becouse of  CloseIcon } */}
                    <Button variant='link' startIcon={<Icons.CloseIcon />} className={styles.AddButton}>
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
                content: <UserProjects/>
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
