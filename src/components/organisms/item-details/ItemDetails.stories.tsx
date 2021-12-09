import { FlexibleForm } from '@/components';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import ItemDetails from './ItemDetails';

export default {
  title: 'components/organisms/Item Details',
  component: ItemDetails,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <ItemDetails
      defaultTabValue={1}
      defaultSubTabValue={1}
      tabs={[
        {
          title: 'Organization Data',
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
                      props: {
                        inputLabel: 'Currency',
                        options: [
                          { label: 'AMD', value: 1 },
                          { label: 'USD', value: 2 },
                          { label: 'EUR', value: 3 }
                        ],
                        isSearchable: true,
                        isMulti: true,
                        defaultValue: [1],
                        disabled: true
                      }
                    },
                    {
                      type: 'input',
                      name: 'status',
                      props: {
                        label: 'Status',
                        defaultValue: 'Active',
                        disabled: true
                      }
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
                        defaultValue: '111.123.56.85',
                        disabled: true
                      }
                    },
                    {
                      type: 'input',
                      name: 'regSRC',
                      props: {
                        label: 'Registration Source',
                        defaultValue: 'Forever',
                        disabled: true
                      }
                    },
                    {
                      type: 'input',
                      name: 'created',
                      props: {
                        label: 'Created By',
                        defaultValue: 'Inesa Khachatryan',
                        disabled: true
                      }
                    },
                    {
                      type: 'input',
                      name: 'form',
                      props: {
                        label: 'Registration Form IP',
                        defaultValue: 'No',
                        disabled: true
                      }
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
          ),
          value: 1
        },
        {
          title: 'Projects',
          value: 2,
          subTabs: [
            {
              title: 'Main Information',
              badgeCount: 40,
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
                          props: {
                            inputLabel: 'Currency',
                            options: [
                              { label: 'AMD', value: 1 },
                              { label: 'USD', value: 2 },
                              { label: 'EUR', value: 3 }
                            ],
                            isSearchable: true,
                            isMulti: true,
                            defaultValue: [1],
                            disabled: true
                          }
                        },
                        {
                          type: 'input',
                          name: 'status',
                          props: {
                            label: 'Status',
                            defaultValue: 'Active',
                            disabled: true
                          }
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
                            defaultValue: '111.123.56.85',
                            disabled: true
                          }
                        },
                        {
                          type: 'input',
                          name: 'regSRC',
                          props: {
                            label: 'Registration Source',
                            defaultValue: 'Forever',
                            disabled: true
                          }
                        },
                        {
                          type: 'input',
                          name: 'created',
                          props: {
                            label: 'Created By',
                            defaultValue: 'Inesa Khachatryan',
                            disabled: true
                          }
                        },
                        {
                          type: 'input',
                          name: 'form',
                          props: {
                            label: 'Registration Form IP',
                            defaultValue: 'No',
                            disabled: true
                          }
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
              ),
              value: 1
            },
            {
              title: 'Game Details',
              badgeCount: 200,
              content: <>Sub tab 2</>,
              value: 2
            },
            {
              title: 'Provider Details',
              badgeCount: 15,
              content: <>Sub tab 3</>,
              value: 3
            }
          ]
        },
        {
          title: 'Documents',
          value: 3
        },
        {
          title: 'Tab 4',
          value: 4
        },
        {
          title: 'Tab 5',
          value: 5
        },
        {
          title: 'Tab 6',
          value: 6
        },
        {
          title: 'Tab 7',
          value: 7
        }
      ]}
    />
  );
};
