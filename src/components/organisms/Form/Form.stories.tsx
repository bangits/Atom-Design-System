import { withKnobs } from '@storybook/addon-knobs';
import Form from './Form';

export default {
  component: Form,
  decorators: [withKnobs],
  title: 'components/organisms/Form'
};

export const Default = () => {
  return (
    <Form
      title='Add provider'
      firstButtonProps={{
        children: 'Cancel'
      }}
      secondButtonProps={{
        children: 'Save'
      }}
      renderInputs={(Component, name) => {
        console.log(Component, name);
        return <Component />;
      }}
      fields={[
        {
          type: 'input',
          name: 'name',
          props: {
            label: 'Provider Name'
          }
        },
        {
          type: 'select',
          name: 'targetMarkets',
          props: {
            inputLabel: 'Target market',
            options: [
              { label: 'market 1', value: 1 },
              { label: 'market 2', value: 2 },
              { label: 'market 3', value: 3 }
            ],
            isSearchable: true,
            isMulti: true
          }
        },
        {
          type: 'select',
          name: 'certifiedCountries',
          props: {
            inputLabel: 'Certified countries',
            options: [
              { label: 'Certified country 1', value: 1 },
              { label: 'Certified country 2', value: 2 },
              { label: 'Certified country 3', value: 3 }
            ],
            isSearchable: true,
            isMulti: true
          }
        },
        {
          type: 'select',
          name: 'certifiedCountries',
          props: {
            inputLabel: 'Restricted countries',
            options: [
              { label: 'Restricted country 1', value: 1 },
              { label: 'Restricted country 2', value: 2 },
              { label: 'Restricted country 3', value: 3 }
            ],
            isSearchable: true,
            isMulti: true
          }
        },
        {
          type: 'select',
          name: 'providerCurrencies',
          props: {
            inputLabel: 'Currency',
            options: [
              { label: 'Currency 1', value: 1 },
              { label: 'Currency 2', value: 2 },
              { label: 'Currency 3', value: 3 }
            ],
            isSearchable: true,
            isMulti: true
          }
        },
        {
          type: 'select',
          name: 'defaultCurrency',
          props: {
            inputLabel: 'Default currency',
            options: [
              { label: 'Default currency 1', value: 1 },
              { label: 'Default currency 2', value: 2 },
              { label: 'Default currency 3', value: 3 }
            ],
            isSearchable: true
          }
        }
      ]}
    />
  );
};
