import { withKnobs } from '@storybook/addon-knobs';
import SortableItemCard from './SortableItemCard';

export default {
  title: 'components/organisms/SortableItemCard',
  component: SortableItemCard,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <SortableItemCard
      imgSrc='https://storageaccountatom.blob.core.windows.net/storage/07816e5e-fa2e-41b1-926e-6f3709f4ce7f_file'
      index='1'
      actions={
        <>
          <div>Action1</div>
          <div>Action2</div>
        </>
      }
      title='Daikoku Blessings Daikoku Blessings Daikoku Blessings'
      subtitle='Wagering Reduce : 100%'
      checkboxProps={{
        onChange: console.log
      }}
    />
  );
};
