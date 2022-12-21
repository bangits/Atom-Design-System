import { Icons } from '@/atom-design-system';
import { Label } from '@/components';
import { TextInput as MYUITextInput, TextInputProps as MyUITextInputProps, Tooltip } from '@my-ui/core';
import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './TextInput.module.scss';
export { TextInputProps } from '@my-ui/core';

export interface TextInputDesignSystemProps extends MyUITextInputProps {
  optionalText?: ReactNode;

  tooltipProps?: {
    icon?: keyof typeof Icons;
    tooltipText: string | ReactNode;
  };
}

export const TextInput = ({ tooltipProps, containerClassName, ...props }: TextInputDesignSystemProps) => {
  const TooltipIcon = tooltipProps && Icons[tooltipProps.icon || 'InfoTooltipIcon'];

  return (
    <div className={classNames(styles.TextInputContainer, containerClassName)}>
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
