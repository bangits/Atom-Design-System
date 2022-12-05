import { Label } from '@/components';
import { InfoTooltipIcon } from '@/icons';
import { TextInput as MYUITextInput, TextInputProps, Tooltip } from '@my-ui/core';
import { ReactNode } from 'react';
import styles from './TextInput.module.scss';
export { TextInputProps } from '@my-ui/core';

export const TextInput = (props: TextInputProps & { optionalText?: ReactNode; tooltipText?: string }) => {
  return (
    <div className={styles['Checkbox--container']}>
      {props.tooltipText && (
        <div className={styles['Checkbox-tooltip--container']}>
          <Tooltip text={props.tooltipText}>
            <InfoTooltipIcon className={styles['Checkbox-tooltip']} width='1.5rem' height='1.5rem' />
          </Tooltip>
        </div>
      )}
      <MYUITextInput
        className={props.textarea && styles.TextArea}
        style={{ width: '100%' }}
        {...props}
        label={
          <Label
            isForInput
            text={props.label}
            optional={!!props.optionalText}
            optionalText={`(${props.optionalText})`}
          />
        }
      />
    </div>
  );
};
