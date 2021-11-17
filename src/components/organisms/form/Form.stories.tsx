import { withKnobs, object, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Form from './Form';

export default {
  component: Form,
  decorators: [withKnobs],
  title: 'components/organisms/Form'
};

export const Default = () => {
  return (
    <Form
      title='Add Player'
      showBackButton={boolean('showBackButton', true)}
      onClick={action('onClick')}
      firstButtonProps={{
        children: 'Close'
      }}
      secondButtonProps={{
        children: 'Save'
      }}
      renderInputs={(Component, name) => {
        console.log(Component, name);
        return <Component />;
      }}
      fields={object('fields', [
        {
          type: 'input',
          name: 'firstName',
          label: 'First Name',
          col: 4
        },
        {
          type: 'input',
          name: 'lastName',
          label: 'Last Name',
          col: 4
        },
        {
          type: 'input',
          name: 'middleName',
          label: 'Middle Name',
          col: 4
        },
        {
          type: 'datepicker',
          label: 'Date of Birth',
          name: 'dateOfBirth',
          col: 6,
          props: {}
        },
        {
          type: 'select',
          name: 'gender',
          col: 6,
          props: {
            inputLabel: 'Gender',
            options: [
              {
                label: 'Male',
                value: 1
              },
              {
                label: 'Female',
                value: 2
              },
              {
                label: 'Other...',
                value: 3
              }
            ]
          }
        },
        {
          type: 'select',
          name: 'country',
          col: 6,
          props: {
            inputLabel: 'Country',
            options: [
              {
                label: 'Armenia',
                value: 1
              },
              {
                label: 'Russia',
                value: 2
              },
              {
                label: 'Italy',
                value: 3
              }
            ]
          }
        },
        {
          type: 'select',
          name: 'region',
          col: 6,
          props: {
            inputLabel: 'Region',
            options: [
              {
                label: 'Region 1',
                value: 1
              },
              {
                label: 'Region 2',
                value: 2
              },
              {
                label: 'Region 3',
                value: 3
              }
            ]
          }
        },
        {
          type: 'select',
          name: 'city',
          col: 6,
          props: {
            inputLabel: 'City',
            options: [
              {
                label: 'City 1',
                value: 1
              },
              {
                label: 'City 2',
                value: 2
              },
              {
                label: 'City 3',
                value: 3
              }
            ]
          }
        },
        {
          type: 'input',
          name: 'address',
          label: 'Address',
          col: 6
        },
        {
          type: 'input',
          name: 'zipCode',
          label: 'Zip code',
          col: 6
        },
        {
          type: 'input',
          name: 'contactNumber',
          label: 'Contact Number',
          col: 6
        },

        {
          type: 'select',
          name: 'documentType',
          col: 6,
          props: {
            inputLabel: 'Document type',
            options: [
              {
                label: 'Document type 1',
                value: 1
              },
              {
                label: 'Document type 2',
                value: 2
              },
              {
                label: 'Document type 3',
                value: 3
              }
            ]
          }
        },
        {
          type: 'input',
          name: 'passportId',
          label: 'Passport/ID',
          col: 6
        },

        {
          type: 'checkbox',
          name: 'checkbox',
          label: 'checkbox',

          props: {
            checkboxes: [
              {
                label: 'Mobile',
                name: 'mobile',
                value: 1
              },
              {
                label: 'Tablet',
                name: 'tablet',
                value: 2
              }
            ]
          }
        },
        {
          type: 'radio',
          name: 'radio-group',
          label: 'Radio Group',

          props: {
            radios: [
              {
                label: 'Desktop',
                value: 1
              },
              {
                label: 'Tablet',
                value: 2
              }
            ]
          }
        }
      ])}
    />
  );
};
