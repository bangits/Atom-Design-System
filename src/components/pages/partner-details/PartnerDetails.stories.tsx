import { FlexibleForm } from '@/components';
import { IconButton } from '@my-ui/core';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import PartnerDetails from './PartnerDetails';

export default {
  title: 'components/pages/Partner Details',
  component: PartnerDetails,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <PartnerDetails
      breadCrumbProps={{
        links: [
          {
            label: 'Partner Management',
            isRedirect: true
          },
          {
            label: 'Partner Details'
          }
        ]
      }}
      parentCompany={{
        data: [
          { name: 'Parent Company', description: 'None' },
          { name: 'Parent Company ID', description: 'None' }
        ]
      }}
      docInfo={{
        data: [
          { name: 'Document ID', description: '5461213584' },
          { name: 'Type', description: 'Partnership Agreement' },
          { name: 'Expiration Date', description: '12/08/2021' }
        ],
        status: { statusName: 'Status', statusVariant: 'active', statusLabel: 'Signed' }
      }}
      itemDetailsProps={{
        defaultTabValue: 1,
        tabs: [
          {
            title: 'Organization Data',
            value: 1,
            subTabs: [
              {
                badgeCount: 0,
                title: 'Main Information',
                value: 1,
                content: (
                  <>
                    <FlexibleForm
                      editFormProps={{
                        title: 'Account Information',
                        applyButton: (
                          <IconButton
                            icon={
                              <svg
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
                        ),
                        closeButton: (
                          <IconButton
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
                        ),
                        renderInputs: (Component, name) => {
                          return <Component />;
                        },
                        fields: [
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
                            type: 'datePicker',
                            name: 'datepicker',
                            props: {
                              placeholderText: 'dd/mm/yyyy',
                              dateFormat: 'dd/MM/yyyy'
                            }
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
                        ]
                      }}
                      editedFormProps={{
                        options: [
                          { title: 'Owner', variant: 'label' },
                          { title: 'Email', value: 'antonian.evgenia@gmail.com', variant: 'default' },
                          {
                            title: 'Username',
                            value: 'Eva123456',
                            variant: 'default'
                          },
                          {
                            title: 'Currency',
                            value: 'USD',
                            variant: 'bold'
                          },

                          {
                            title: 'Created By',
                            value: ['Jackpot Support', 'Jewels and Gems', 'Jewels'],
                            variant: 'tag'
                          },
                          {
                            title: 'Status',
                            value: 'Active',
                            variant: 'default'
                          },
                          {
                            title: 'Segment',
                            value: 'Vip Players',
                            variant: 'default'
                          },
                          {
                            title: 'Btag',
                            value: '111.123.56.85',
                            variant: 'default'
                          },
                          {
                            title: 'Registration Source',
                            value: '09/05/2021 12:00:00',
                            variant: 'default'
                          },
                          {
                            title: 'Created By',
                            value: 'Inesa Khachatryan',
                            variant: 'default'
                          }
                        ],
                        title: 'Account Information',
                        editButton: (
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
                        )
                      }}
                    />

                    <FlexibleForm
                      editedFormProps={{
                        options: [
                          { title: 'Owner', variant: 'label' },
                          { title: 'Email', value: 'antonian.evgenia@gmail.com', variant: 'default' },
                          {
                            title: 'Username',
                            value: 'Eva123456',
                            variant: 'default'
                          },
                          {
                            title: 'Currency',
                            value: 'USD',
                            variant: 'bold'
                          },

                          {
                            title: 'Created By',
                            value: ['Jackpot Support', 'Jewels and Gems', 'Jewels'],
                            variant: 'tag'
                          },
                          {
                            title: 'Status',
                            value: 'Active',
                            variant: 'default'
                          },
                          {
                            title: 'Segment',
                            value: 'Vip Players',
                            variant: 'default'
                          },
                          {
                            title: 'Btag',
                            value: '111.123.56.85',
                            variant: 'default'
                          },
                          {
                            title: 'Registration Source',
                            value: '09/05/2021 12:00:00',
                            variant: 'default'
                          },
                          {
                            title: 'Created By',
                            value: 'Inesa Khachatryan',
                            variant: 'default'
                          }
                        ],
                        title: 'Personal Information',
                        editButton: (
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
                        )
                      }}
                    />

                    <FlexibleForm
                      editedFormProps={{
                        options: [
                          { title: 'Owner', variant: 'label' },
                          { title: 'Email', value: 'antonian.evgenia@gmail.com', variant: 'default' },
                          {
                            title: 'Username',
                            value: 'Eva123456',
                            variant: 'default'
                          },
                          {
                            title: 'Currency',
                            value: 'USD',
                            variant: 'bold'
                          },

                          {
                            title: 'Created By',
                            value: ['Jackpot Support', 'Jewels and Gems', 'Jewels'],
                            variant: 'tag'
                          },
                          {
                            title: 'Status',
                            value: 'Active',
                            variant: 'default'
                          },
                          {
                            title: 'Segment',
                            value: 'Vip Players',
                            variant: 'default'
                          },
                          {
                            title: 'Btag',
                            value: '111.123.56.85',
                            variant: 'default'
                          },
                          {
                            title: 'Registration Source',
                            value: '09/05/2021 12:00:00',
                            variant: 'default'
                          },
                          {
                            title: 'Created By',
                            value: 'Inesa Khachatryan',
                            variant: 'default'
                          }
                        ],
                        title: 'Contacts',
                        editButton: (
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
                        )
                      }}
                    />
                    <FlexibleForm
                      editedFormProps={{
                        options: [
                          { title: 'Owner', variant: 'label' },
                          { title: 'Email', value: 'antonian.evgenia@gmail.com', variant: 'default' },
                          {
                            title: 'Username',
                            value: 'Eva123456',
                            variant: 'default'
                          },
                          {
                            title: 'Currency',
                            value: 'USD',
                            variant: 'bold'
                          },

                          {
                            title: 'Created By',
                            value: ['Jackpot Support', 'Jewels and Gems', 'Jewels'],
                            variant: 'tag'
                          },
                          {
                            title: 'Status',
                            value: 'Active',
                            variant: 'default'
                          },
                          {
                            title: 'Segment',
                            value: 'Vip Players',
                            variant: 'default'
                          },
                          {
                            title: 'Btag',
                            value: '111.123.56.85',
                            variant: 'default'
                          },
                          {
                            title: 'Registration Source',
                            value: '09/05/2021 12:00:00',
                            variant: 'default'
                          },
                          {
                            title: 'Created By',
                            value: 'Inesa Khachatryan',
                            variant: 'default'
                          }
                        ],
                        title: 'Verifications',
                        editButton: (
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
                        )
                      }}
                    />
                  </>
                )
              },
              {
                badgeCount: 0,
                title: 'Main Information',
                value: 2,
                content: <>HHHHH</>
              }
            ]
          },
          {
            title: 'Documents',
            value: 2
          },
          {
            title: 'Projects',
            value: 3
          },
          {
            title: 'Tab3',
            value: 4
          },
          {
            title: 'Tab4',
            value: 5
          },
          {
            title: 'Tab5',
            value: 6
          },
          {
            title: 'Tab6',
            value: 7
          },
          {
            title: 'Tab7',
            value: 8
          }
        ]
      }}
      statusInfo={{
        label: 'Status',
        statusLabel: 'Validated',
        variant: 'active',
        actions: [
          {
            iconName: 'EditIcon',
            onClick: () => {
              console.log('SettingIcon');
            }
          }
        ]
      }}
    />
  );
};
