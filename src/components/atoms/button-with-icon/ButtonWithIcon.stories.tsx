import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { ButtonWithIcon } from './ButtonWithIcon';

export default {
  component: ButtonWithIcon,
  decorators: [withKnobs],
  title: 'components/atoms/ButtonWithIcon'
};

export const Default = () => {
  return (
    <ButtonWithIcon icon='RotateIcon' onClick={action('onClick')}>
      Refresh
    </ButtonWithIcon>
  );
};
