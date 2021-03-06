import { withKnobs } from '@storybook/addon-knobs';
import LabelGroup from './LabelGroup';

export default {
  component: LabelGroup,
  decorators: [withKnobs],
  title: 'components/molecules/LabelGroup'
};

export const Default = () => {
  return <LabelGroup title='Total Market' totalLabel='19 Countries' />;
};
