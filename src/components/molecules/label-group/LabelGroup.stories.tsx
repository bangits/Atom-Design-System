import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import LabelGroup from './LabelGroup';

export default {
  component: LabelGroup,
  decorators: [withKnobs],
  title: 'components/molecules/LabelGroup'
};

export const Default = () => {
  return <LabelGroup />;
};
