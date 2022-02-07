import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import LicensesCard from './LicensesCard';

export default {
  component: LicensesCard,
  decorators: [withKnobs],
  title: 'components/organisms/License Card'
};

export const Default = () => {
  return (
    <LicensesCard
      onClick={action("onClick")}
      col={6}
      addLicense='Add License'
      clickHere='Click here'
      toDoSomething='to add license'
    />
  );
};
