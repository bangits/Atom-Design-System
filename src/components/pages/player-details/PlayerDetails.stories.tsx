import { EditedForm, EditForm } from '@/components';
import { IconsGroup } from '@/components/molecules/icons-group';
import { Card, IconButton, SubTab, Tab } from '@my-ui/core';
import { object, withKnobs } from '@storybook/addon-knobs';
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
  const [edit, setEdit] = useState(false);

  return (
    <PlayerDetails
      userInfo={object('userInfo', {
        title: 'Username Ines254',
        id: 'ID 1234567',
        userName: 'Inesa Khachatryan',
        regInfo: 'Bet365'
      })}
      walletInfo={object('walletInfo', {
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
      })}
      statusInfo={object('statusInfo', {
        label: 'Status',
        variant: 'active',
        statusLabel: 'Active'
      })}
      lastActivity={object('lastActivity', {
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
      })}>
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
          <div style={{ display: 'flex', width: 986, paddingTop: 8, position: 'relative' }}>
            <div style={{ position: 'absolute', right: -16, bottom: 120 }}>
              <IconsGroup
                icons={[
                  {
                    icon: (
                      <svg data-name='Component 62 – 4' xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
                        <path data-name='Rectangle 920' fill='none' d='M0 0h24v24H0z' />
                        <g data-name='eye (1)'>
                          <path
                            data-name='Path 1941'
                            d='M8 98.725a10 10 0 0 0-7.875 4.363.627.627 0 0 0 0 .752A9.991 9.991 0 0 0 8 108.206a10 10 0 0 0 7.875-4.363.627.627 0 0 0 0-.752A9.991 9.991 0 0 0 8 98.725zm.219 8.079a3.346 3.346 0 1 1 3.139-3.12 3.357 3.357 0 0 1-3.139 3.116zm-.1-1.542a1.8 1.8 0 1 1 1.691-1.682 1.8 1.8 0 0 1-1.692 1.682z'
                            transform='translate(4 -91.466)'
                            fill='currentColor'
                          />
                        </g>
                      </svg>
                    )
                  },
                  {
                    icon: (
                      <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24'>
                        <path
                          fill='currentColor'
                          d='M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z'
                        />
                      </svg>
                    ),
                    isActive: true
                  },
                  {
                    icon: (
                      <svg
                        id='Component_64_10'
                        data-name='Component 64 – 10'
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'>
                        <rect id='Rectangle_918' data-name='Rectangle 918' width='24' height='24' fill='none' />
                        <g id='off-button' transform='translate(5 5)'>
                          <g id='Group_2179' data-name='Group 2179'>
                            <path
                              id='Path_3510'
                              data-name='Path 3510'
                              d='M7,0a7,7,0,1,0,7,7A7.008,7.008,0,0,0,7,0ZM6.364,3.182a.636.636,0,0,1,1.273,0V5.909a.636.636,0,0,1-1.273,0ZM7,11.455A4.046,4.046,0,0,1,3.979,4.718a.636.636,0,1,1,.95.847,2.773,2.773,0,1,0,4.141,0,.636.636,0,0,1,.95-.847A4.046,4.046,0,0,1,7,11.455Z'
                              fill='currentColor'
                            />
                          </g>
                        </g>
                      </svg>
                    )
                  }
                ]}
              />
            </div>
            <div style={{ marginLeft: 16, marginBottom: 8 }}>
              <div style={{ width: 477, marginBottom: 8 }}>
                {edit ? (
                  <EditForm
                    title='Account Information'
                    applyButton={
                      <IconButton
                        icon={
                          <svg
                            onClick={() => setEdit(!edit)}
                            id='done_black_24dp'
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'>
                            <path id='Path_43198' data-name='Path 43198' d='M0,0H24V24H0Z' fill='none' />
                            <path
                              id='Path_43199'
                              data-name='Path 43199'
                              d='M8.491,15.236,4.673,11.418,3.4,12.691l5.091,5.091L19.4,6.873,18.127,5.6Z'
                              transform='translate(1)'
                              fill='#00b21e'
                            />
                          </svg>
                        }
                      />
                    }
                    closeButton={
                      <IconButton
                        onClick={() => setEdit(!edit)}
                        icon={
                          <svg
                            id='close_black_24dp'
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'>
                            <path id='Path_43196' data-name='Path 43196' d='M0,0H24V24H0Z' fill='none' />
                            <path
                              id='Path_43197'
                              data-name='Path 43197'
                              d='M17,6.209,15.791,5,11,9.791,6.209,5,5,6.209,9.791,11,5,15.791,6.209,17,11,12.209,15.791,17,17,15.791,12.209,11Z'
                              transform='translate(1 1)'
                              fill='#505d6e'
                            />
                          </svg>
                        }
                      />
                    }
                    renderInputs={(Component, name) => {
                      return <Component />;
                    }}
                    fields={[
                      {
                        type: 'input',
                        name: 'email',
                        props: {
                          label: 'Email',
                          defaultValue: 'Antonian.evgenia@gmail.com'
                        }
                      },
                      {
                        type: 'input',
                        name: 'username',
                        props: {
                          label: 'Username',
                          defaultValue: 'Eva12345'
                        }
                      },
                      {
                        type: 'select',
                        name: 'currency',
                        disabled: true,
                        props: {
                          inputLabel: 'Currency',
                          options: [
                            { label: 'AMD', value: 1 },
                            { label: 'USD', value: 2 },
                            { label: 'EUR', value: 3 }
                          ],
                          isSearchable: true,
                          isMulti: true,
                          defaultValue: [1]
                        }
                      },
                      {
                        type: 'input',
                        name: 'status',
                        props: {
                          label: 'Status',
                          defaultValue: 'Active'
                        },
                        disabled: true
                      },
                      {
                        type: 'input',
                        name: 'segments',
                        props: {
                          label: 'Segments',
                          defaultValue: 'Forever'
                        }
                      },
                      {
                        type: 'input',
                        name: 'btag',
                        props: {
                          label: 'Btag',
                          defaultValue: '111.123.56.85'
                        },
                        disabled: true
                      },
                      {
                        type: 'input',
                        name: 'regSRC',
                        props: {
                          label: 'Registration Source',
                          defaultValue: 'Forever'
                        },
                        disabled: true
                      },
                      {
                        type: 'input',
                        name: 'created',
                        props: {
                          label: 'Created By',
                          defaultValue: 'Inesa Khachatryan'
                        },
                        disabled: true
                      },
                      {
                        type: 'input',
                        name: 'date',
                        props: {
                          label: 'Registered Date',
                          defaultValue: '09/05/2021 12:00:00'
                        },
                        disabled: true
                      },
                      {
                        type: 'input',
                        name: 'form',
                        props: {
                          label: 'Registration Form IP',
                          defaultValue: 'No'
                        },
                        disabled: true
                      }
                    ]}
                  />
                ) : (
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
                          <svg
                            onClick={() => setEdit(!edit)}
                            xmlns='http://www.w3.org/2000/svg'
                            width='12'
                            height='12'
                            viewBox='0 0 24 24'>
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
                )}
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
