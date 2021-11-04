import { action } from '@storybook/addon-actions';
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
      resultLabel='1062 users found'
      defaultOpened={boolean('defaultOpened', true)}
      initialValues={object('initialValues', {
        'datepicker-selection': [],
        select: '',
        multiselect: [],
        datepicker: null,
        'from-to': {
          from: null,
          to: null
        },
        platform: [],
        landscape: [],
        portrait: [],
        status: []
      })}
      filters={object('filters', [
        {
          type: 'select',
          label: 'Select',
          name: 'select',
          props: {
            options: [
              {
                label: 'SelectOption1',
                value: 1
              },
              {
                label: 'SelectOption2',
                value: 2
              },
              {
                label: 'SelectOption3',
                value: 3
              }
            ]
          }
        },
        {
          type: 'select',
          label: 'Multielect',
          name: 'multiselect',
          props: {
            options: [
              {
                label: 'SelectOption1',
                value: 1
              },
              {
                label: 'SelectOption2',
                value: 2
              },
              {
                label: 'SelectOption3',
                value: 3
              }
            ],
            isMulti: true
          }
        },
        {
          type: 'datepicker',
          label: 'Datepicker',
          name: 'datepicker',
          props: {}
        },
        {
          type: 'datepicker',
          label: 'Datepicker With Selection',
          name: 'datepicker-selection',
          props: {
            withDropdowns: true,
            selectsRange: true,
            monthsShown: 2
          }
        },
        {
          type: 'from-to',
          label: 'From-to',
          name: 'from-to',
          fromInputProps: {
            label: 'From'
          },
          toInputProps: {
            label: 'To',
            type: 'number'
          }
        }
      ])}
      checkboxFilters={object('checkboxFilters', [
        {
          name: 'platform',
          label: 'Platform',
          checkboxProps: [
            {
              label: 'Desktop',
              name: 'desktop',
              value: 1
            },
            {
              label: 'Tablet',
              name: 'tablet',
              value: 2
            },
            {
              label: 'Mobile',
              name: 'mobile',
              value: 3
            }
          ]
        },
        {
          name: 'landscape',
          label: 'Mobile Screen Mode',
          checkboxProps: [
            {
              label: 'Landscape',
              name: 'landscape',
              value: 1
            },
            {
              label: 'Portrait',
              name: 'portrait',
              value: 2
            }
          ]
        },
        {
          label: 'Tablet Screen Mode',
          name: 'portrait',
          checkboxProps: [
            {
              label: 'Landscape',
              value: 1,
              name: 'secondLandscape'
            },
            {
              label: 'Portrait',
              value: 2,
              name: 'secondPortrait'
            }
          ]
        },
        {
          label: 'Status',
          name: 'status',
          checkboxProps: [
            {
              label: 'Active',
              value: 1,
              name: 'active'
            },
            {
              label: 'Inactive',
              value: 1,
              name: 'inactive'
            }
          ]
        }
      ])}
      applyLabel={text('applyLabel', 'Apply')}
      clearLabel={text('clearLabel', 'Clear')}
      onSubmit={action('onSubmit')}
      onClear={action('onClear')}
    />
  );
};
