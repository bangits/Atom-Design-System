import { SortableList } from '@/components/organisms/sortable-list';
import { TextInput } from '@my-ui/core';
import { withKnobs } from '@storybook/addon-knobs';
import SortableItem from './SortableItem';

export default {
  component: SortableItem,
  decorators: [withKnobs],
  title: 'components/molecules/SortableItem'
};

export const Default = () => {
  return (
    <SortableList>
      <SortableItem index={1}>
        <TextInput />
        <div>Test</div>
        <TextInput />
      </SortableItem>

      <SortableItem index={2}>
        <TextInput />
        <TextInput />
      </SortableItem>

      <SortableItem index={3}>
        <TextInput />
        <TextInput />
      </SortableItem>
    </SortableList>
  );
};
