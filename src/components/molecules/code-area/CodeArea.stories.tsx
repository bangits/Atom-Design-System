import { withKnobs } from '@storybook/addon-knobs';
import CodeArea from './CodeArea';

export default {
  component: CodeArea,
  decorators: [withKnobs],
  title: 'components/molecules/CodeArea'
};

export const Default = () => {
  const area = document.getElementById('textarea') as HTMLTextAreaElement;

  return <CodeArea title='asd' onChange={(e) => console} />;
};
