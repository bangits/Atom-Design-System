import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import FlexibleForm from './FlexibleForm';

export default {
  title: 'components/organisms/Flexible Form',
  component: FlexibleForm,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <FlexibleForm
      isEdit={true}
      onSubmit={(closeForm) => {
        closeForm();
      }}
      editFormProps={{
        title: 'Account Information',
        applyButtonTooltipText: 'Submit Form',
        closeButtonTooltipText: 'Close Form',
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

          // {
          //   type: 'datePicker',
          //   name: 'datepicker',
          //   props: {
          //     /* onChange: (date: Date) => setDate(date), */
          //     placeholderText: 'dd/mm/yyyy',
          //     dateFormat: 'dd/MM/yyyy'
          //     /* selected: date || new Date() */
          //   }
          // },
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
        noDataText: 'HELLLOOOO',
        editButtonTooltipText: 'Edit form',
        options: [
          { title: 'Owner', variant: 'label' },
          { title: 'Email', value: 'antonian.evgenia@gmail.com', variant: 'default' },
          {
            title: 'Username',
            value: '',
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
  );
};
