import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import CheckboxWithLabel from './CheckboxWithLabel';

export default {
  component: CheckboxWithLabel,
  decorators: [withKnobs],
  title: 'components/molecules/CheckboxWithLabel'
};

export const Default = () => {
  return (
    <CheckboxWithLabel
      label='Checkbox Group'
      onChange={action('onChange')}
      checkboxes={[
        {
          label: 'Checkbox1',
          value: 1,
          name: 'checkbox1',
          defaultChecked: true
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
