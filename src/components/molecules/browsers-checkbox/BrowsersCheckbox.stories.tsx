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
      <BrowsersCheckbox browserIcon={<ChromeIcon width='3rem' />} />
      <BrowsersCheckbox browserIcon={<EdgeIcon width='3rem' />} />
      <BrowsersCheckbox browserIcon={<FirefoxIcon width='3rem' />} />
      <BrowsersCheckbox browserIcon={<OperaIcon width='3rem' />} />
      <BrowsersCheckbox browserIcon={<SafariIcon width='3rem' />} />
    </>
  );
};
