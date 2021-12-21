import { ChromeIcon, EdgeIcon, FirefoxIcon, OperaIcon, SafariIcon } from '@/icons';
import { withKnobs } from '@storybook/addon-knobs';
import UserProjects from './UserProjects';

export default {
  component: UserProjects,
  decorators: [withKnobs],
  title: 'components/molecules/UserProjects'
};

export const Default = () => {
  return <UserProjects />;
};
