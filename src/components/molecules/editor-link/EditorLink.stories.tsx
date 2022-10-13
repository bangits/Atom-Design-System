import { withKnobs } from '@storybook/addon-knobs';
import EditorLink from './EditorLink';

export default {
  component: EditorLink,
  decorators: [withKnobs],
  title: 'components/molecules/EditorLink'
};

export const Default = () => {
  return <EditorLink></EditorLink>;
};
