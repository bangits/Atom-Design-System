import { withKnobs } from '@storybook/addon-knobs';
import ClickableTag from './ClickableTag';

export default {
  component: ClickableTag,
  decorators: [withKnobs],
  title: 'components/molecules/ClickableTag'
};

export const Default = () => {
  return <ClickableTag title='ClickableTag' component={(props) => <a href='#' {...props} />} />;
};
