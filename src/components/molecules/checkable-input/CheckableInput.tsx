/* eslint-disable @typescript-eslint/no-empty-function */
import { Label, TextInput } from '@/components';
import { ApplySuccess } from '@/icons';
import { Scroll, Tag, TextInputProps, Tooltip } from '@my-ui/core';
import classNames from 'classnames';
import { ReactNode, useMemo, useState } from 'react';
import styles from './CheckableInput.module.scss';

export type AddPlayerIdOrUserNameValueType = {
  id: number;
  userName: TextInputProps['value'];
};

const CheckableInput = (
  props: TextInputProps & {
    values: AddPlayerIdOrUserNameValueType[];
    optionalText?: ReactNode;
    applyCheck: () => void;
    explanation?: string;
    tooltipTitle?: string;
    fillUserNameOrPlayerIdTooltipTitle?: string;
    invalidTooltipTitle?: string;
    value: TextInputProps['value'];
    onChange?(value: AddPlayerIdOrUserNameValueType[]): void;
    onDeleteTag?(value: AddPlayerIdOrUserNameValueType['id']): void;
  }
) => {
  const [inputValue, setInputValue] = useState<TextInputProps['value']>('');

  const applyIconColor = useMemo(
    () => (props.explanation ? ('danger' as const) : !props.explanation ? ('success' as const) : null),
    [props.explanation]
  );

  return (
    <>
      <div className={styles.CheckableInput}>
        <TextInput
          onChange={(e) => {
            setInputValue(e.target.value);
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
      <Scroll height='176px'>
        <div className={styles.TagsContainer}>
          {props.values.map((value) => (
            <Tag
              key={value.id}
              title={`${value.userName} - ${value.id}`}
              closeIcon
              color={'primary'}
              onClose={() => props.onDeleteTag(value.id)}
            />
          ))}
        </div>
      </Scroll>
    </>
  );
};

export default CheckableInput;
