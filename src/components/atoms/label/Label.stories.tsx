import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { Label } from './Label';

export default {
  component: Label,
  decorators: [withKnobs],
  title: 'components/atoms/Label'
};

export const Default = () => {
  return (
    <Label
      optional={boolean('optional', false)}
      optionalText={text('optionalText', '(optional)')}
      text={text('text', 'Company Logotype')}
    />
  );
};
