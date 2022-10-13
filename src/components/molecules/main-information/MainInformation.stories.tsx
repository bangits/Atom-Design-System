import { Icons } from '@my-ui/core';
import { withKnobs } from '@storybook/addon-knobs';
import MainInformation from './MainInformation';

export default {
  title: 'components/molecules/MainInformation',
  component: MainInformation,
  decorators: [withKnobs]
};

export const Default = () => {
  return <MainInformation idLabel='ID' name='Albatros' id='1234567' addCopyButton icon={<Icons.DustbinIcon />} />;
};
