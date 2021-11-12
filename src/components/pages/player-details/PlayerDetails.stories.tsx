import { EditedForm } from '@/components';
import { Card, IconButton, SubTab, Tab } from '@my-ui/core';
import { withKnobs } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import PlayerDetails from './PlayerDetails';

export default {
  title: 'components/pages/Player Details',
  component: PlayerDetails,
  decorators: [withKnobs]
};

export const Default = () => {
  const [tabValue, setTabValue] = useState(1);
  const [subTabValue, setSubTabValue] = useState(1);

  return (
    <PlayerDetails
      userInfo={{
        title: 'Username Ines254',
        id: 'ID 1234567',
        userName: 'Inesa Khachatryan',
        regInfo: 'Bet365'
      }}
      walletInfo={{
        title: 'Wallet',
        realBalance: {
          label: 'Real Balance',
          balance: '21 300 AMD',
          subBalance: [
            { label: 'Casino', balance: '10 300 AMD' },
            { label: 'Sport', balance: '11 000 AMD' }
          ]
        },
        bonusBalance: {
          label: 'Bonus Balance',
          balance: '123 AMD'
        },
        totalBalance: {
          label: 'Total Balance',
          balance: '21 423 AMD'
        }
      }}
      statusInfo={{
        label: 'Status',
        variant: 'active',
        statusLabel: 'Active'
      }}
      lastActivity={{
        title: 'Last Activity',
        info: [
          {
            label: 'Last login',
            date: '12.09.2021 12:08:03'
          },
          {
            label: 'Last game session',
            date: '12.09.2021 12:08:03'
          }
        ]
      }}>
      <Card borderRadius={1.6} style={{ marginLeft: 8, backgroundColor: 'white' }}>
        <div style={{ paddingTop: 8, paddingLeft: 16, paddingRight: 16 }}>
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
          <div style={{ paddingTop: 24, paddingLeft: 16, paddingRight: 16 }}>
            {tabValue === 1 && (
              <SubTab
                options={[
                  { title: 'Player Details', value: 1, badgeCount: 0 },
                  { title: 'Player KPIs', value: 2, badgeCount: 0 },
                  { title: 'Documents', value: 3, badgeCount: 0 },
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
          <div style={{ display: 'flex', width: 986, paddingTop: 8 }}>
            <div style={{ marginLeft: 16, marginBottom: 8 }}>
              <div style={{ width: 477, marginBottom: 8 }}>
                <EditedForm
                  options={[
                    { title: 'Email', value: 'antonian.evgenia@gmail.com' },
                    {
                      title: 'Username',
                      value: 'Eva123456'
                    },
                    {
                      title: 'Currency',
                      value: 'USD'
                    },
                    {
                      title: 'Status',
                      value: 'Active'
                    },
                    {
                      title: 'Segment',
                      value: 'Vip Players'
                    },
                    {
                      title: 'Btag',
                      value: '111.123.56.85'
                    },
                    {
                      title: 'Registration Source',
                      value: '09/05/2021 12:00:00'
                    },
                    {
                      title: 'Created By',
                      value: 'Inesa Khachatryan'
                    },
                    {
                      title: 'Registration source ',
                      value: '09/05/2021 12:00:00'
                    },
                    {
                      title: 'Registration Form IP',
                      value: 'No'
                    },
                    {
                      title: 'Test Player',
                      value: 'Yes'
                    },
                    {
                      title: 'State',
                      value: 'Forever'
                    }
                  ]}
                  title='Account Information'
                  editButton={
                    <IconButton
                      icon={
                        <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24'>
                          <path
                            fill='currentColor'
                            d='M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z'
                          />
                        </svg>
                      }
                      variant='dark'
                    />
                  }
                />
              </div>
              <div style={{ width: 477, marginBottom: 8 }}>
                <EditedForm
                  options={[
                    {
                      title: 'First Name',
                      value: 'N/A'
                    },
                    {
                      title: 'Last Name',
                      value: 'Antonian'
                    },
                    {
                      title: 'Middle Name',
                      value: 'Sergei'
                    },
                    {
                      title: 'Date Of Birth',
                      value: '30/08/1995'
                    },
                    {
                      title: 'Gender',
                      value: 'Male'
                    },
                    {
                      title: 'Document Type',
                      value: 'Passport'
                    },
                    {
                      title: 'Passport ID',
                      value: '123456789'
                    }
                  ]}
                  title='Personal Information'
                  editButton={
                    <IconButton
                      icon={
                        <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24'>
                          <path
                            fill='currentColor'
                            d='M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z'
                          />
                        </svg>
                      }
                      variant='dark'
                    />
                  }
                />
              </div>
            </div>
            <div style={{ marginLeft: 8, marginBottom: 8 }}>
              <div style={{ width: 477, marginBottom: 8 }}>
                <EditedForm
                  options={[
                    {
                      title: 'Phone Number',
                      value: '+374 (10) 11 00 13'
                    },
                    {
                      title: 'Mobile Number',
                      value: '+374 98 98 98 98'
                    },
                    {
                      title: 'Zip Code',
                      value: '1111'
                    },
                    {
                      title: 'Address',
                      value: '13 Qochar Street'
                    },
                    {
                      title: 'Country',
                      value: 'Armenia'
                    },
                    {
                      title: 'City',
                      value: 'Yerevan'
                    },
                    {
                      title: 'Region',
                      value: 'Armavir'
                    },
                    {
                      title: 'Time Zone',
                      value: '+4 GMT'
                    }
                  ]}
                  title='Contacts'
                  editButton={
                    <IconButton
                      icon={
                        <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24'>
                          <path
                            fill='currentColor'
                            d='M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z'
                          />
                        </svg>
                      }
                      variant='dark'
                    />
                  }
                />
              </div>
              <div style={{ width: 477, marginBottom: 8 }}>
                <EditedForm
                  options={[
                    { title: 'Document Verified', value: 'Yes' },
                    {
                      title: 'Document Verified Date',
                      value: '09/05/2021 12:00:00'
                    },
                    {
                      title: 'Email Verified',
                      value: 'Yes'
                    },
                    {
                      title: 'Email Verified Date',
                      value: '09/05/2021 12:00:00'
                    },
                    {
                      title: 'Mobile Number Verified',
                      value: 'Yes'
                    },
                    {
                      title: 'Mobile Number Verified Date',
                      value: '09/05/2021 12:00:00'
                    }
                  ]}
                  title='Verifications'
                  editButton={
                    <IconButton
                      icon={
                        <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24'>
                          <path
                            fill='currentColor'
                            d='M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z'
                          />
                        </svg>
                      }
                      variant='dark'
                    />
                  }
                />
              </div>
            </div>
          </div>
        )}
      </Card>
    </PlayerDetails>
  );
};
