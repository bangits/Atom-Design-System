import { withKnobs } from '@storybook/addon-knobs';
import LinkItem from './LinkItem';

export default {
  component: LinkItem,
  decorators: [withKnobs],
  title: 'components/molecules/LinkItem'
};

export const Default = () => {
  return (
    <LinkItem imgSrc='https://i.ibb.co/y6GKtg0/linkedin-1-2.png' index='1.' linkHref='https://www.linkedin.com/feed/' />
  );
};
