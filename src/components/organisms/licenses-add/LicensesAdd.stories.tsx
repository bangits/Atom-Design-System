import { withKnobs } from '@storybook/addon-knobs';
import LicensesAdd from './LicensesAdd';

export default {
  component: LicensesAdd,
  decorators: [withKnobs],
  title: 'components/organisms/Licenses Add'
};

export const Default = () => {
  return (
    <LicensesAdd
      addCardProps={{
        addLicense: 'Add License',
        clickHere: 'Click here',
        toDoSomething: 'to add license'
      }}
      editFormProps={{
        fields: [
          {
            type: 'input',
            name: 'name'
          },
          {
            type: 'input',
            name: 'name'
          },
          {
            type: 'input',
            name: 'name'
          },
          {
            type: 'input',
            name: 'name'
          },
          {
            type: 'input',
            name: 'name'
          }
        ],
        renderInputs: (Component) => <Component />
      }}
      col={6}
    />
  );
};
