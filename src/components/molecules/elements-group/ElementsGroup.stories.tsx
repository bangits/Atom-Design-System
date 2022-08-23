import { withKnobs } from '@storybook/addon-knobs';
import { ClickableTag } from '../clickable-tag';
import ElementsGroup from './ElementsGroup';

export default {
  component: ElementsGroup,
  decorators: [withKnobs],
  title: 'components/molecules/ElementsGroup'
};

export const Default = () => {
  return (
    <ElementsGroup>
      {new Array(30).fill(null).map((_, index) => (
        <ClickableTag key={index} title='ClickableTag' component={(props) => <a href='#' {...props} />} />
      ))}
    </ElementsGroup>
  );
};
