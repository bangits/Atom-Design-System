import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import ProjectCard from './ProjectCard';

export default {
  component: ProjectCard,
  decorators: [withKnobs],
  title: 'components/organisms/ProjectCard'
};

export const Default = () => {
  return <ProjectCard />;
};
