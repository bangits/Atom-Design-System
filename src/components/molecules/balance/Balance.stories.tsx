import { number, text, withKnobs } from '@storybook/addon-knobs';
import Balance from './Balance';

export default {
  component: Balance,
  decorators: [withKnobs],
  title: 'components/molecules/Balance'
};

export const Default = () => {
  return (
    <>
      <Balance money={number('money', 1)} currency={text('currency', 'USD')} />
    </>
  );
};
