import { withKnobs } from '@storybook/addon-knobs';
import BrowsersCheckboxGroup from './BrowsersCheckboxGroup';

export default {
  component: BrowsersCheckboxGroup,
  decorators: [withKnobs],
  title: 'components/organisms/BrowsersCheckboxGroup'
};

export const Default = () => {
  enum SupportedBrowsersEnum {
    SAFARI = 1,
    CHROME = 2,
    FIREFOX = 3,
    EDGE = 4,
    OPERA = 5
  }

  return <BrowsersCheckboxGroup browsersEnum={SupportedBrowsersEnum} />;
};
