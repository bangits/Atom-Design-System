import { ChromeIcon, EdgeIcon, FirefoxIcon, OperaIcon, SafariIcon } from '@/icons';
import { withKnobs } from '@storybook/addon-knobs';
import BrowsersCheckbox from './BrowsersCheckbox';

export default {
  component: BrowsersCheckbox,
  decorators: [withKnobs],
  title: 'components/molecules/BrowsersCheckbox'
};

export const Default = () => {
  return (
    <>
      <BrowsersCheckbox browserIcon={<ChromeIcon />} />
      <BrowsersCheckbox browserIcon={<EdgeIcon />} />
      <BrowsersCheckbox browserIcon={<FirefoxIcon />} />
      <BrowsersCheckbox browserIcon={<OperaIcon />} />
      <BrowsersCheckbox browserIcon={<SafariIcon />} />
    </>
  );
};
