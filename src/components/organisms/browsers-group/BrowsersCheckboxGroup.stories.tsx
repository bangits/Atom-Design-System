import { withKnobs } from '@storybook/addon-knobs';
import BrowsersCheckboxGroup from './BrowsersCheckboxGroup';

export default {
  component: BrowsersCheckboxGroup,
  decorators: [withKnobs],
  title: 'components/organisms/BrowsersCheckboxGroup'
};

export const Default = () => {
  enum SupportedBrowsersEnum {
    SAFARI = 'Safari',
    CHROME = 'Chrome',
    FIREFOX = 'Mozilla Firefox',
    EDGE = 'Edge',
    OPERA = 'Opera'
  }

  return <BrowsersCheckboxGroup browsersEnum={SupportedBrowsersEnum} />;
};
