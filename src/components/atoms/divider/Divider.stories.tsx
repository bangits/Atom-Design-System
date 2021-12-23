import { withKnobs } from '@storybook/addon-knobs';
import { Divider } from './Divider';

export default {
  component: Divider,
  decorators: [withKnobs],
  title: 'components/atoms/Divider'
};

export const Default = () => {
  return <Divider>Divider</Divider>;
};
