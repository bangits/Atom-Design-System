import { Popover as MYUIPopover, PopoverProps } from '@my-ui/core';

const Popover = ({ children, ...rest }: PopoverProps) => {
  return <MYUIPopover {...rest}>{children}</MYUIPopover>;
};

export default Popover;
