import { Select as MyUISelect, SelectProps } from '@my-ui/core';
export { GroupBase, SelectOptionType, SelectProps, SelectValueType } from '@my-ui/core';

export const Select = (props: SelectProps<any, any, any>) => {
  return <MyUISelect {...props} />;
};
