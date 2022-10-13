import { ComponentMeta, ComponentStory } from '@storybook/react';
import DetailsPage from './DetailsPage';

export default {
  title: 'components/organisms/DetailsPage',
  component: DetailsPage
} as ComponentMeta<typeof DetailsPage>;

const Template: ComponentStory<typeof DetailsPage> = (args) => (
  <DetailsPage
    breadCrumbLinks={[
      {
        label: 'Player management'
      },
      {
        label: 'Player details'
      }
    ]}
    sidebarContent='Sidebar content'>
    Content
  </DetailsPage>
);

export const Default = Template.bind({});
