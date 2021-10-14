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
        theme: ''
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
          type: 'input',
          name: 'gameName',
          props: {
            label: 'Game Name'
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
          type: 'input',
          name: 'theme',
          props: {
            label: 'Theme'
          }
        },
        {
          type: 'input',
          name: 'theme',
          props: {
            label: 'Theme'
          }
        },
        {
          type: 'input',
          name: 'theme',
          props: {
            label: 'Theme'
          }
        },
        {
          type: 'input',
          name: 'theme',
          props: {
            label: 'Theme'
          }
        },
        {
          type: 'input',
          name: 'theme',
          props: {
            label: 'Theme'
          }
        },
        {
          type: 'input',
          name: 'theme',
          props: {
            label: 'Theme'
          }
        },
        {
          type: 'input',
          name: 'theme',
          props: {
            label: 'Theme'
          }
        },
        {
          type: 'input',
          name: 'theme',
          props: {
            label: 'Theme'
          }
        },
        {
          type: 'input',
          name: 'theme',
          props: {
            label: 'Theme'
          }
        },
        {
          type: 'input',
          name: 'theme',
          props: {
            label: 'Theme'
          }
        }
      ])}
      applyLabel={text('applyLabel', 'Apply')}
      clearLabel={text('clearLabel', 'Clear')}
      onSubmit={(state) => console.log(state)}
      onClear={(setState) => {
        setState({});
        console.log('Cleared');
      }}
    />
  );
};
