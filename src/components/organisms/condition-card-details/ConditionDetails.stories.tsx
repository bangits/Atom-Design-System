import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import ConditionDetails from './ConditionDetails';

export default {
  component: ConditionDetails,
  decorators: [withKnobs],
  title: 'components/organisms/Condition Details'
};

export const Default = () => {
  return (
    <ConditionDetails
      col={12}
      conditionDetailsLabel='Condition Details'
      addActivity={() => {}}
      addCriteria={() => {}}
      conditionDetailsSubLabel='Condition can be created based on Activiy or Criteria.'
    />
  );
};
