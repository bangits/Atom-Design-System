import { withKnobs, number, text } from '@storybook/addon-knobs';
import Balance from './Balance';

export default {
  component: Balance,
  decorators: [withKnobs],
  title: 'components/molecules/Balance'
};

export const Default = () => {
  return (
    <>
      <Balance money={number('Value', 1)} locale={text('label', 'fr-Fr')} currency={text('currency value', 'USD')} />
    </>
  );
};
