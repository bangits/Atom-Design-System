import { withKnobs } from '@storybook/addon-knobs';
import EditorLinkForm from './EditorLinkForm';

export default {
  component: EditorLinkForm,
  decorators: [withKnobs],
  title: 'components/molecules/EditorLinkForm'
};

export const Default = () => {
  return <EditorLinkForm></EditorLinkForm>;
};
