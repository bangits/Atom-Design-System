import { withKnobs } from '@storybook/addon-knobs';
import HeaderContent from './HeaderContent';

export default {
  title: 'components/organisms/Header Content',
  component: HeaderContent,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <HeaderContent
      title='Navbar Pages'
      links={[
        {
          name: 'Page 1',
          url: 'http://website.com'
        },
        {
          name: 'Link 1',
          url: 'http://website.com',
          isLink: true
        }
      ]}
    />
  );
};
