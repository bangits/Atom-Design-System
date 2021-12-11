import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import DetailsMainInfo from './DetailsMainInfo';

export default {
  component: DetailsMainInfo,
  decorators: [withKnobs],
  title: 'components/molecules/DetailsMainInfo'
};

export const Default = () => {
  return (
    <DetailsMainInfo
      imgURL='https://novomatic.com/sites/default/files/2017-05/Logo_N-Shortbrand.png'
      nameLabel='Novomatic'
      idLabel='ID1234567'
      noDataText='N/A'
    />
  );
};
