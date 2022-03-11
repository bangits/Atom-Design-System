import { TextInput as MYUITextInput, TextInputProps } from '@my-ui/core';
import { ReactNode } from 'react';
export { TextInputProps } from '@my-ui/core';

export const TextInput = (props: TextInputProps & { optionalText?: ReactNode }) => {
  return (
    <MYUITextInput
      {...props}
      label={
        <>
          {props.label}
          {props.optionalText && <span>{props.optionalText}</span>}
        </>
      }
    />
  );
};
