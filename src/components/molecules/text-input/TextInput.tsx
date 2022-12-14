import { Icons } from '@/atom-design-system';
import { Label } from '@/components';
import { TextInput as MYUITextInput, TextInputProps as MyUITextInputProps, Tooltip } from '@my-ui/core';
import { ReactNode } from 'react';
import styles from './TextInput.module.scss';

export interface TextInputDesignSystemProps extends MyUITextInputProps {
  optionalText?: ReactNode;

  tooltipProps?: {
    icon?: keyof typeof Icons;
    tooltipText: string | ReactNode;
  };
}

export const TextInput = ({ tooltipProps, ...props }: TextInputDesignSystemProps) => {
  const TooltipIcon = tooltipProps && Icons[tooltipProps.icon || 'InfoTooltipIcon'];

  return (
    <div className={styles.TextInputContainer}>
      {tooltipProps && (
        <Tooltip showEvent='hover' text={tooltipProps.tooltipText} placement='top'>
          <div className={styles.TextInputContainer__Tooltip}>
            <TooltipIcon />
          </div>
        </Tooltip>
      )}

      <MYUITextInput
        className={props.textarea && styles.TextArea}
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
