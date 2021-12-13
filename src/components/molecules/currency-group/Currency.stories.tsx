import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import CurrencyGroup from './CurrencyGroup';

export default {
  component: CurrencyGroup,
  decorators: [withKnobs],
  title: 'components/molecules/CurrencyGroup'
};

export const Default = () => {
  return (
    <CurrencyGroup
      currencies={[
        {
          title: 'YEN',
          inactive: true
        },
        {
          title: 'YEN',
          inactive: true
        },
        {
          title: 'YEN',
          inactive: true
        },
        {
          title: 'YEN',
          inactive: true
        },
        {
          title: 'YEN',
          inactive: true
        },
        {
          title: 'YEN',
          inactive: true
        },
        {
          title: 'YEN',
          inactive: true
        }
      ]}
    />
  );
};
