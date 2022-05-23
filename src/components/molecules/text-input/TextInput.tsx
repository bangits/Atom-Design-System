import { Label } from '@/components';
import { TextInput as MYUITextInput, TextInputProps } from '@my-ui/core';
import { ReactNode } from 'react';
export { TextInputProps } from '@my-ui/core';

export const TextInput = (props: TextInputProps & { optionalText?: ReactNode }) => {
  return (
    <MYUITextInput
      {...props}
      label={
        <Label isForInput text={props.label} optional={!!props.optionalText} optionalText={`(${props.optionalText})`} />
      }
    />
  );
};
