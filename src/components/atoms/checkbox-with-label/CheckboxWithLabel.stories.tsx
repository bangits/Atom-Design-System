import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import CheckboxWithLabel from './CheckboxWithLabel';

export default {
  component: CheckboxWithLabel,
  decorators: [withKnobs],
  title: 'components/molecules/CheckboxWithLabel'
};

export const Default = () => {
  return <CheckboxWithLabel />;
};
