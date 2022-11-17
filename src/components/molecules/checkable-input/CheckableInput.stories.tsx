import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import CheckableInput from './CheckableInput';

export default {
  component: CheckableInput,
  decorators: [withKnobs],
  title: 'components/molecules/CheckableInput'
};

export const Default = () => {
  return (
    <>
      <CheckableInput
        value=''
        label='Add UserName'
        explanation='Add UserName'
        color='success'
        applyCheck={() => {}}
        tooltipTitle='Add Provider'
        invalidTooltipTitle='Please fill fields'
        onChange={action('onChange')}
        values={[
          { id: 1452, userName: 'Ruben' },
          { id: 45, userName: 'Tetst' }
        ]}
      />
    </>
  );
};
