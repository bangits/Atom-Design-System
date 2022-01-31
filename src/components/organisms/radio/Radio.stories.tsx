import { FirstCheckboxIcon, SecondCheckboxIcon, ViewCardImageIcon } from '@/icons';
import { withKnobs, object, text } from '@storybook/addon-knobs';
import Radio from './Radio';

export default {
  component: Radio,
  decorators: [withKnobs],
  title: 'components/molecules/Radio'
};
export const Default = () => {
  return (
    <Radio
      radios={[
        {
          icon: <FirstCheckboxIcon />,
          value: '1',
          checked: true
        },
        {
          icon: <SecondCheckboxIcon />,
          value: '2'
        }
      ]}
    />
  );
};
