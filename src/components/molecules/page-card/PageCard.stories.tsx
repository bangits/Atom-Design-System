import { withKnobs } from '@storybook/addon-knobs';
import { ClickableTag } from '../clickable-tag';
import { ElementsGroup } from '../elements-group';
import PageCard from './PageCard';

export default {
  component: PageCard,
  decorators: [withKnobs],
  title: 'components/molecules/PageCard'
};

export const Default = () => {
  return (
    <PageCard>
      <ElementsGroup>
        {new Array(30).fill(null).map((_, index) => (
          <ClickableTag key={index} title='ClickableTag' component={(props) => <a href='#' {...props} />} />
        ))}
      </ElementsGroup>
    </PageCard>
  );
};
