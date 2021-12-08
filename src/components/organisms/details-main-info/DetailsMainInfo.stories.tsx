import { action } from '@storybook/addon-actions';
import DetailsMainInfo from './DetailsMainInfo';
import { boolean, withKnobs, text } from '@storybook/addon-knobs';
import { ComponentMeta } from '@storybook/react';
import styles from './DetailsMainInfo.module.scss';

export default {
  component: DetailsMainInfo,
  decorators: [withKnobs],
  title: 'components/molecules/Details Main Info'
} as ComponentMeta<typeof DetailsMainInfo>;

export const Default = () => {
  return (
    <DetailsMainInfo
      label={text('label', 'Shining Crown')}
      id={text('id', 'ID1234567')}
      src={text('src', 'https://novomatic.com/sites/default/files/2017-05/Logo_N-Shortbrand.png')}
    />
  );
};
