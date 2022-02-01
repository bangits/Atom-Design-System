import { Select } from '@my-ui/core';
import { withKnobs } from '@storybook/addon-knobs';
import HidableSelect from './HidableSelect';

export default {
  title: 'components/organisms/Hidable Select',
  component: HidableSelect,
  decorators: [withKnobs]
};


export const Default = () => {
    return <HidableSelect 
    buttonTitle="Add"
    renderCustomSelect={(changeOpenedCustomSelect) => (
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
          onChange={() => changeOpenedCustomSelect(false)}
        />
      )}
    />
}