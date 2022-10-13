import { FormFields, Icons } from '@/atom-design-system';
import { Button } from '@my-ui/core';
import { withKnobs } from '@storybook/addon-knobs';
import ButtonForm from './ButtonForm';

export default {
  title: 'components/organisms/ButtonForm',
  component: ButtonForm,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <ButtonForm
      getContainerProps={({ open, close }) => ({
        onMouseOver: open,
        onMouseLeave: close
      })}
      renderOpenElement={() => (
        <Button variant='link' startIcon={<Icons.PlusCircleLarge />}>
          Add Link
        </Button>
      )}>
      {({ close }) => (
        <div>
          <FormFields
            fields={[
              {
                name: 'input',
                type: 'input'
              }
            ]}
            removeMargin
            renderInputs={(Component) => <Component />}></FormFields>
          <Button onClick={close}>Save</Button>
        </div>
      )}
    </ButtonForm>
  );
};
