import { withKnobs } from '@storybook/addon-knobs';
import LoadingPage from './LoadingPage';

export default {
  title: 'components/pages/Loading Page',
  component: LoadingPage,
  decorators: [withKnobs]
};

export const Default = () => {
  return <LoadingPage />;
};
