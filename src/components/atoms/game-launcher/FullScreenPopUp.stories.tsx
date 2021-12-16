import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { FullScreenPopUp } from './FullScreenPopUp';
export default {
  component: FullScreenPopUp,
  decorators: [withKnobs],
  title: 'components/atoms/Full Screen PopUp'
};

export const Default = () => {
  return <FullScreenPopUp></FullScreenPopUp>;
};
