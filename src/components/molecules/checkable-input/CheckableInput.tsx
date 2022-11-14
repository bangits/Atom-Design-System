import { Label, TextInput } from '@/components';
import { trim } from '@/helpers';
import { ApplySuccess } from '@/icons';
import { TextInputProps, Tooltip } from '@my-ui/core';
import classNames from 'classnames';
import { ReactNode, useMemo, useState } from 'react';
import styles from './CheckableInput.module.scss';
export { TextInputProps } from '@my-ui/core';

const CheckableInput = (
  props: TextInputProps & {
    optionalText?: ReactNode;
    applyCheck: () => void;
    explanation?: string;
    tooltipTitle?: string;
    fillUserNameOrPlayerIdTooltipTitle?: string;
    invalidTooltipTitle?: string;
    defValue: TextInputProps['value'];
    onChange?(value: string): void;
  }
) => {
  const [inputValue, setInputValue] = useState<TextInputProps['value']>('');

  const isValid = trim(inputValue) && !props.explanation;

  const applyIconColor = useMemo(
    () => (props.explanation ? ('danger' as const) : !props.explanation && isValid ? ('success' as const) : null),
    [props.explanation, isValid]
  );

  const [inputValues, setInputValues] = useState<string>('');

  return (
    <div className={styles.CheckableInput}>
      <TextInput
        onChange={(e) => {
          setInputValues(e.target.value);
        }}
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
      <Tooltip
        color={applyIconColor || 'primary'}
        showEvent='hover'
        text={
          applyIconColor === 'danger'
            ? props.fillUserNameOrPlayerIdTooltipTitle
            : applyIconColor === 'success'
            ? props.tooltipTitle
            : props.invalidTooltipTitle
        }>
        <ApplySuccess
          height='2.5rem'
          width='2.5rem'
          onClick={props.applyCheck}
          className={classNames({
            [styles['CheckableInput--button-disabled']]: !applyIconColor,
            [styles[`CheckableInput--button-${applyIconColor}`]]: applyIconColor,
            [styles['CheckableInput--button-pulse']]: !!props.explanation
          })}
        />
      </Tooltip>
    </div>
  );
};

export default CheckableInput;
