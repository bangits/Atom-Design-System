import { MoneyReduceIcon } from '@/icons';
import { withKnobs } from '@storybook/addon-knobs';
import CustomItemCard from './CustomItemCard';

export default {
  title: 'components/organisms/CustomItemCard',
  component: CustomItemCard,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <CustomItemCard
      index='1'
      actions={
        <>
          <div>
            <MoneyReduceIcon />
          </div>
          <div>Action 2</div>
        </>
      }
      title='2FA Verification'
      subtitle='ID12345678'
    />
  );
};
