import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import Filters from './Filters';

export default {
  component: Filters,
  decorators: [withKnobs],
  title: 'components/organisms/Filters'
};

export const Default = () => {
  return (
    <Filters
      resultLabel='1006 users founded'
      defaultOpened={boolean('defaultOpened', true)}
      initialValues={object('initialValues', {
        gameId: '',
        externalId: '',
        providerName: '',
        gameName: '',
        type: '',
        theme: '',
        checkbox: {},
        betRange: {}
      })}
      filters={object('filters', [
        {
          type: 'input',
          name: 'gameId',
          props: {
            label: 'Game ID',
            value: ''
          }
        },
        {
          type: 'input',
          name: 'externalId',
          props: {
            label: 'External ID'
          }
        },
        {
          type: 'input',
          name: 'providerName',
          props: {
            label: 'Provider Name'
          }
        },
        {
          type: 'from-to',
          name: 'betRange',
          fromInputProps: {
            label: 'Min bet - From'
          },
          toInputProps: {
            label: 'Min bet - To'
          }
        },
        {
          type: 'input',
          name: 'type',
          props: {
            label: 'Type'
          }
        },
        {
          type: 'radio',
          name: 'Gender',
          props: [
            {
              value: 'male',
              label: 'Male'
            },
            {
              value: 'female',
              label: 'Female'
            }
          ]
        },
        {
          name: 'multiSelect',
          type: 'select',
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
        }
      ])}
      checkboxFilters={object('checkboxFilters', [
        {
          name: 'platform',
          type: 'checkbox',
          label: 'Platform',
          checkboxProps: [
            {
              label: 'Desktop',
              value: 1
            },
            {
              label: 'Tablet',
              value: 2
            },
            {
              label: 'Mobile',
              value: 3
            }
          ]
        }
      ])}
      applyLabel={text('applyLabel', 'Apply')}
      clearLabel={text('clearLabel', 'Clear')}
      onSubmit={(state) => console.log(state)}
      onClear={() => console.log('Cleared')}
    />
  );
};