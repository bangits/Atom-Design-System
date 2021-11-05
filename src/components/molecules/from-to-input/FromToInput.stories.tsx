import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import FromToInput from './FromToInput';

export default {
  component: FromToInput,
  decorators: [withKnobs],
  title: 'components/molecules/From To Input'
};

export const Default = () => {
  return <FromToInput onChange={action('onChange')} />;
};
