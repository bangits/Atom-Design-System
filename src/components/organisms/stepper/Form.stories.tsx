import { Stepper } from '@/components';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  component: Stepper,
  decorators: [withKnobs],
  title: 'components/organisms/Stepper'
};

export const Default = () => {
  return (
    <Stepper
      steps={[
        {
          title: 'First Step',
          value: 1
        },
        {
          title: 'Second Step',
          value: 2
        },
        {
          title: 'Third Step',
          value: 3
        }
      ]}
      value={1}
    />
  );
};
