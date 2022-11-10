import { IconButton, Icons, Tooltip } from '@my-ui/core';
import { withKnobs } from '@storybook/addon-knobs';
import PopoverWithInput from './PopoverWithInput';

export default {
  component: PopoverWithInput,
  decorators: [withKnobs],
  title: 'components/templates/PopoverWithInput'
};

export const Default = () => {
  return (
    <PopoverWithInput
      buttonLabel='Save'
      title='Position Change'
      totalCount='1-20'
      renderOpenElement={({ open }) => (
        <Tooltip text='Tooltip' showEvent='hover'>
          <IconButton icon={<Icons.RecalculateIcon width='100%' />} onClick={open} />
        </Tooltip>
      )}
    />
  );
};
