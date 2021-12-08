import { FlexibleForm } from '@/components';
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
                        title: 'Account Information'
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
                        title: 'Personal Information'
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
                        title: 'Contacts'
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
                        title: 'Verifications'
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
