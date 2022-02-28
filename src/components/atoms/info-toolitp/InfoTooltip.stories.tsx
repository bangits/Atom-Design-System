import { withKnobs } from '@storybook/addon-knobs';
import { InfoTooltip } from './InfoTooltip';

export default {
  component: InfoTooltip,
  decorators: [withKnobs],
  title: 'components/atoms/InfoTooltip'
};

export const Default = () => {
  return <InfoTooltip infoTooltipText='Info tooltip text' />;
};
