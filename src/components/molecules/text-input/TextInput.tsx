import { Label } from '@/components';
import { TextInput as MYUITextInput, TextInputProps } from '@my-ui/core';
import { ReactNode } from 'react';
export { TextInputProps } from '@my-ui/core';
import styles from './TextInput.module.scss';

export const TextInput = (props: TextInputProps & { optionalText?: ReactNode }) => {
  return (
    <MYUITextInput
      className={props.textarea && styles.TextArea}
      {...props}
      label={
        <Label isForInput text={props.label} optional={!!props.optionalText} optionalText={`(${props.optionalText})`} />
      }
    />
  );
};
