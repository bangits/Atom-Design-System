import { object, text, withKnobs } from '@storybook/addon-knobs';
import RadioGroup from './RadioGroup';

export default {
  component: RadioGroup,
  decorators: [withKnobs],
  title: 'components/molecules/Radio Group'
};

export const Default = () => {
  return (
    <RadioGroup
      label={text('label', 'Radio Group')}
      radios={object('radios', [
        {
          label: 'Male',
          value: 1
        },
        {
          label: 'Female',
          value: 2
        }
      ])}
    />
  );
};
