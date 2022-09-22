import { Select } from '@my-ui/core';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import AddActivity from './AddActivity';

export default {
  component: AddActivity,
  decorators: [withKnobs],
  title: 'components/organisms/Add Activity'
};

export const Default = () => {
  return (
    <AddActivity
      activities={[
        {
          criteries: [
            {
              criteria: '',
              checkToPerform: null,
              value: 'asd',
              field: <Select />
            },
            {
              criteria: '',
              checkToPerform: null,
              value: 'asd',
              field: <Select />
            },
            {
              criteria: '',
              checkToPerform: null,
              value: 'asd',
              field: <Select />
            }
          ]
        },
        {
          criteries: [
            {
              criteria: '',
              checkToPerform: null,
              value: '',
              field: <Select />
            }
          ]
        }
      ]}
      buttonTitle='Add Criteria'
      renderCustomSelect={
        <Select
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
      }
      onClick={action('onClick')}
    />
  );
};
