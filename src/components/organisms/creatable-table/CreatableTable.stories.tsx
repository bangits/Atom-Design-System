import { Checkbox } from '@my-ui/core';
import CreatableTable, { CreatableTableViewModel } from './CreatableTable';
import { withKnobs } from '@storybook/addon-knobs';
import { CreatableRow } from './CreatableRow';
import { useState } from 'react';

export default {
  title: 'components/organisms/Creatable Table',
  component: CreatableTable,
  decorators: [withKnobs]
};

const tiers = [
  {
    from: '1',
    to: '100',
    index: 0,
    amount: '10',
    remove: () => console.log(),
    renderInputs: (Component) => {
      return <Component />;
    },
    fields: [
      {
        type: 'field',
        name: 'from',
        label: 'From',
        col: 4,
        props: {
          disabled: true,
          type: 'number',
          defaultValue: '100',
          placeholder: 'Min'
        }
      },
      {
        type: 'field',
        name: 'to',
        label: 'To',
        col: 4,
        props: {
          backgroundColor: 'white',
          placeholder: 'Max',
          defaultValue: '1000'
        }
      },
      {
        type: 'field',
        name: 'amount',
        label: 'Amount',
        col: 4,
        props: {
          type: 'number',
          placeholder: 'Amount',
          defaultValue: '20'
        }
      }
    ]
  },
  {
    from: '1',
    to: '100',
    index: 0,
    amount: '10',
    remove: () => console.log(),
    renderInputs: (Component) => {
      return <Component />;
    },
    fields: [
      {
        type: 'field',
        name: 'from',
        label: 'From',
        col: 4,
        props: {
          disabled: true,
          type: 'number',
          value: '1000',
          placeholder: 'Min'
        }
      },
      {
        type: 'field',
        name: 'to',
        label: 'To',
        col: 4,
        props: {
          backgroundColor: 'white',
          placeholder: 'Max',
          value: '10000'
        }
      },
      {
        type: 'field',
        name: 'amount',
        label: 'Amount',
        col: 4,
        props: {
          type: 'number',
          placeholder: 'Amount',
          value: '20'
        }
      }
    ]
  }
];

export const Default = () => {
  const data = [
    {
      from: 10,
      to: 100,
      amount: 30
    },
    {
      from: 100,
      to: 1000,
      amount: 25
    },
    {
      from: 1000,
      to: 1500,
      amount: 15
    }
  ];

  const [state, setState] = useState<CreatableTableViewModel[]>([...tiers]);

  return (
    <CreatableTable
      editMode={true}
      addTier={() => {
        setState([
          ...state,
          {
            from: '1',
            to: '100',
            index: 0,
            amount: '10',
            remove: () => console.log(),
            renderInputs: (Component) => {
              return <Component />;
            },
            fields: [
              {
                type: 'field',
                name: 'from',
                label: 'From',
                col: 4,
                props: {
                  disabled: true,
                  type: 'number',
                  value: '1000',
                  placeholder: 'Min'
                }
              },
              {
                type: 'field',
                name: 'to',
                label: 'To',
                col: 4,
                props: {
                  backgroundColor: 'white',
                  placeholder: 'Max',
                  value: '10000'
                }
              },
              {
                type: 'field',
                name: 'amount',
                label: 'Amount',
                col: 4,
                props: {
                  type: 'number',
                  placeholder: 'Amount',
                  value: '20'
                }
              }
            ]
          }
        ]);
      }}
      amountOrPercent={true}
      columns={[
        { type: 'default', value: 'From' },
        { type: 'default', value: 'To' },
        {
          type: 'custom',
          value: <Checkbox variant='switch' />,
          props: {
            afterLabel: 'Amount',
            beforeLabel: 'Percentage'
          }
        }
      ]}
      buttonName='Add Tier'>
      {state.map((row: CreatableTableViewModel, index: number) => {
        return (
          <CreatableRow variant='writable' removeTier={() => {}} fields={row.fields} renderInputs={row.renderInputs} />
        );
      })}
    </CreatableTable>
  );
};
