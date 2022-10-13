import { Icons } from '@/atom-design-system';
import { Button, TextInput } from '@my-ui/core';
import { withKnobs } from '@storybook/addon-knobs';
import TranslationGroup from './TranslationGroup';

export default {
  component: TranslationGroup,
  decorators: [withKnobs],
  title: 'components/pages/TranslationGroup'
};

export const Default = () => {
  return (
    <TranslationGroup
      leftElements={[<TextInput key={0} />, <TextInput key={1} />]}
      rightElements={[<Button key={0}>Button</Button>, <Button key={1}>Button</Button>]}
      rows={[
        {
          title: 'English (default)',
          content: <>This is content</>,
          icon: <Icons.PhotoCamIcon />
        },
        {
          title: 'Germany',
          content: <>This is content</>,
          icon: <Icons.PhotoCamIcon />
        },
        {
          title: 'Russian',
          content: <>This is content</>,
          icon: <Icons.PhotoCamIcon />
        },
        {
          title: 'Armenian',
          content: <>This is content</>,
          icon: <Icons.PhotoCamIcon />
        },
        {
          title: 'French',
          content: <>This is content</>,
          icon: <Icons.PhotoCamIcon />
        },
        {
          title: 'Spanish',
          content: <>This is content</>,
          icon: <Icons.PhotoCamIcon />
        }
      ]}
    />
  );
};
