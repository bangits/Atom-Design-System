import { withKnobs } from '@storybook/addon-knobs';
import CustomEditor from './CustomEditor';

export default {
  title: 'components/organisms/CustomEditor',
  component: CustomEditor,
  decorators: [withKnobs]
};

export const Default = () => {
  return <CustomEditor size='lg' variables={['@id', '@mail']} title='Send Email' />;
};
