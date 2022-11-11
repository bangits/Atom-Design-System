import { CheckboxWithLabel, Icons, PopoverWithInput, Tooltip } from '@/atom-design-system';
import { withKnobs } from '@storybook/addon-knobs';
import DividerList from './DividerList';

export default {
  component: DividerList,
  decorators: [withKnobs],
  title: 'components/molecules/DividerList'
};

export const Default = () => {
  return (
    <DividerList>
      <CheckboxWithLabel label='Select all' />
      <PopoverWithInput
        buttonLabel='Save'
        title='Position Change'
        totalCount='1-20'
        renderOpenElement={({ open }) => (
          <Tooltip text='Tooltip' showEvent='hover'>
            <button type='button' onClick={open}>
              <Icons.RecalculateIcon width='1.6rem' />
            </button>
          </Tooltip>
        )}
      />
      <PopoverWithInput
        buttonLabel='Save'
        title='Position Change'
        totalCount='1-20'
        renderOpenElement={({ open }) => (
          <Tooltip text='Tooltip' showEvent='hover'>
            <button type='button' onClick={open}>
              <Icons.RecalculateIcon width='1.6rem' />
            </button>
          </Tooltip>
        )}
      />
    </DividerList>
  );
};
