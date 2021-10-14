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
      defaultOpened={boolean('defaultOpened', true)}
      initialValues={object('initialValues', {
        gameId: '',
        externalId: '',
        providerName: '',
        gameName: '',
        type: '',
        theme: '',
        checkbox: {}
      })}
      filters={object('filters', [
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
        },
        {
          type: 'radio',
          name: 'Gender',
          props: [
            {
              value: 'male',
              label: 'Male',
              disabled: false
            },
            {
              value: 'female',
              label: 'Female'
            }
          ]
        }
      ])}
      checkboxFilters={object('checkboxFilters', [
        {
          name: 'Platform',
          type: 'checkbox',
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
        },
        {
          name: 'Mobile Screen Mode',
          type: 'checkbox',
          checkboxProps: [
            {
              label: 'Landscape',
              value: 1
            },
            {
              label: 'Portrait',
              value: 2
            }
          ]
        },
        {
          name: 'Tablet Screen Mode',
          type: 'checkbox',
          checkboxProps: [
            {
              label: 'Landscape',
              value: 1
            },
            {
              label: 'Portrait',
              value: 2
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
