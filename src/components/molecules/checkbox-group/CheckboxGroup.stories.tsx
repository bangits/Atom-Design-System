import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import CheckboxGroup from './CheckboxGroup';

export default {
  component: CheckboxGroup,
  decorators: [withKnobs],
  title: 'components/molecules/CheckboxGroup'
};

export const Default = () => {
  return (
    <CheckboxGroup
      label='Checkbox Group'
      onChange={action('onChange')}
      checkboxes={[
        {
          label: 'Checkbox1',
          value: 1,
          name: 'checkbox1'
        },
        {
          label: 'Checkbox2',
          value: 2,
          name: 'checkbox2'
        }
      ]}
    />
  );
};
