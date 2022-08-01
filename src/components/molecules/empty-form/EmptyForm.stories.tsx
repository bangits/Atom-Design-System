import { withKnobs } from '@storybook/addon-knobs';
import EmptyForm from './EmptyForm';

export default {
  component: EmptyForm,
  decorators: [withKnobs],
  title: 'components/molecules/EmptyForm'
};

export const Default = () => {
  return (
    <EmptyForm
      buttonProps={{
        children: 'Add Navbar'
      }}>
      There is no added games yet
    </EmptyForm>
  );
};
