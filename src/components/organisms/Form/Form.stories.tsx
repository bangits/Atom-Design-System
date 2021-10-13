import { withKnobs } from '@storybook/addon-knobs';
import Form from './Form';

export default {
  component: Form,
  decorators: [withKnobs],
  title: 'components/organisms/Form'
};

export const Default = () => {
  return (
    <Form
      title='Add provider'
      firstButtonProps={{
        children: 'Cancel'
      }}
      secondButtonProps={{
        children: 'Save'
      }}
      renderInputs={(Component, name) => {
        console.log(Component, name);
        return <Component />;
      }}
      fields={[
        {
          type: 'input',
          name: 'input1',
          props: {
            label: 'Test1'
          }
        },
        {
          type: 'select',
          name: 'input2',
          props: {
            placeholder: 'asdasd',
            options: [{ label: 'asdasdasdasd', value: 2 }]
          }
        }
      ]}
    />
  );
};
