import { withKnobs } from '@storybook/addon-knobs';
import PageWrapper from './PageWrapper';

export default {
  component: PageWrapper,
  decorators: [withKnobs],
  title: 'components/molecules/Page Wrapper'
};

export const Default = () => {
  return <PageWrapper />;
};
