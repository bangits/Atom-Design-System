import { ItemDetails, NameDescription, StatusView } from '@/components';
import { NameAndId } from '@/components/molecules/name-and-id';
import UserMainInfo from '@/components/molecules/user-main-info/UserMainInfo';
import { Breadcrumb, Card, Status } from '@my-ui/core';
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
                value: 2
              },
              {
                title: 'Projects',
                value: 3
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
