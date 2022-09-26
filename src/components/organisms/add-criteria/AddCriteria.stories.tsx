import { Select } from '@my-ui/core';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import AddCriteria from './AddCriteria';

export default {
  component: AddCriteria,
  decorators: [withKnobs],
  title: 'components/organisms/Add Criteria'
};

export const Default = () => {
  const equalsArray = [
    { In: 1 },
    { not_in: 2 },
    { equal: 3 },
    { not_equal: 4 },
    { between: 5 },
    { not_between: 6 },
    { less: 7 },
    { less_or_equal: 8 },
    { greater: 9 },
    { greater_or_equal: 10 },
    { begins_with: 11 },
    { not_begins_with: 12 },
    { contains: 13 },
    { not_contains: 14 },
    { ends_with: 15 },
    { not_ends_with: 16 },
    { is_empty: 17 },
    { is_not_empty: 18 },
    { is_null: 19 },
    { is_not_null: 20 }
  ];

  const arr = [
    {
      label: 'IsRegistered',
      aloudCheck: [3, 4, 19, 20],
      value: 1
    },
    {
      label: 'IsEmailVerified',
      aloudCheck: [3, 4],
      value: 2
    },
    {
      label: 'FirstBet',
      aloudCheck: [],
      value: 3
    },
    {
      label: 'FirstDeposit',
      value: 4
    },
    {
      label: 'CountryOfResidence',
      value: 5
    },
    {
      label: 'CityOfResidence',
      value: 6
    },
    {
      label: 'CountryOfBirth',
      value: 7
    },
    {
      label: 'Gender',
      value: 8
    }
  ];

  return (
    <AddCriteria
      criteries={[
        {
          activities: [
            { criteria: 'string', checkToPerform: 'boolean', buttonTitle: 'string' },
            { criteria: 'string', checkToPerform: 'boolean', buttonTitle: 'string' }
          ]
        }
      ]}
      buttonTitle='Add Criteria'
      renderCustomSelect={
        <>
          <Select
            inputLabel='Criteria'
            options={[
              {
                label: 'IsRegistered',
                value: 1
              },
              {
                label: 'IsEmailVerified',
                value: 2
              },
              {
                label: 'FirstBet',
                value: 3
              },
              {
                label: 'FirstDeposit',
                value: 4
              },
              {
                label: 'CountryOfResidence',
                value: 5
              },
              {
                label: 'CityOfResidence',
                value: 6
              },
              {
                label: 'CountryOfBirth',
                value: 7
              },
              {
                label: 'Gender',
                value: 8
              }
            ]}
          />
          <Select
            inputLabel='Check to preform'
            options={[
              {
                label: 'In',
                value: 0
              },
              {
                label: 'not_in',
                value: 1
              },
              {
                label: 'equal',
                value: 2
              },
              {
                label: 'between',
                value: 3
              },
              {
                label: 'not_between',
                value: 4
              },
              {
                label: 'less',
                value: 5
              }
            ]}
          />
          <Select
            inputLabel='Value'
            options={[
              {
                label: 'USD',
                value: 1
              },
              {
                label: 'RUB',
                value: 2
              }
            ]}
          />
        </>
      }
      onClick={action('onClick')}
    />
  );
};
