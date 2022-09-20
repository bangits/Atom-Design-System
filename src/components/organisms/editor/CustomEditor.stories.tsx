import { withKnobs } from '@storybook/addon-knobs';
import CustomEditor from './CustomEditor';

export default {
  title: 'components/organisms/CustomEditor',
  component: CustomEditor,
  decorators: [withKnobs]
};

export const Default = () => {
  return <CustomEditor variables={[]} />;
};
