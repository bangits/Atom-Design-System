import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import AddConditionCard from './AddConditionCard';

export default {
  component: AddConditionCard,
  decorators: [withKnobs],
  title: 'components/organisms/Add Condition'
};

export const Default = () => {
  return <AddConditionCard col={12} onClick={action('onClick')} addCondition='Add Condition' />;
};
