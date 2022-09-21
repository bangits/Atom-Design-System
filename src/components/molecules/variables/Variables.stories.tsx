import { withKnobs } from '@storybook/addon-knobs';
import Variables from './Variables';

export default {
  title: 'components/molecules/Variables',
  component: Variables,
  decorators: [withKnobs]
};

export const Default = () => {
  return <Variables variables={['Verify', 'Preview', 'Download']} />;
};
