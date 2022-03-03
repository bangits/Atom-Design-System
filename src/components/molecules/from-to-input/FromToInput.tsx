import { typedMemo } from '@/helpers';
import { TextInput, TextInputProps } from '@my-ui/core';
import React, { FC, useCallback, useEffect, useReducer } from 'react';
import styles from './FromToInput.module.scss';

export interface FromToInputProps {
  fromInputProps?: TextInputProps;
  toInputProps?: TextInputProps;

  fromInputDefaultValue?: TextInputProps['value'];
  toInputDefaultValue?: TextInputProps['value'];
  onChange?(values: FromToValues): void;
}

export type FromToValues = { from: TextInputProps['value']; to: TextInputProps['value'] };

const FromToInput: FC<FromToInputProps> = ({
  fromInputDefaultValue,
  toInputDefaultValue,
  onChange,
  fromInputProps = {},
  toInputProps = {}
}) => {
  const [inputValues, setInputValues] = useReducer(
    (prevValues: FromToValues, updatedValues: Partial<FromToValues>): FromToValues => {
      const newValues = {
        ...prevValues,
        ...updatedValues
      };

      if (onChange) onChange(newValues);

      return newValues;
    },
    {
      from: fromInputDefaultValue || '',
      to: toInputDefaultValue || ''
    }
  );

  const onInputValueChange = useCallback(
    (name: 'from' | 'to'): TextInputProps['onChange'] =>
      (e) => {
        setInputValues({ [name]: e.target.value });

        if (name === 'from') fromInputProps.onChange?.(e);

        toInputProps.onChange?.(e)
      },
    []
  );

  useEffect(() => {
    if (fromInputProps.value !== undefined) setInputValues({ from: fromInputProps.value });
  }, [fromInputProps.value]);

  useEffect(() => {
    if (toInputProps.value !== undefined) setInputValues({ to: toInputProps.value });
  }, [fromInputProps.value]);

  return (
    <div className={styles.FromToInputContainer}>
      <TextInput
        {...fromInputProps}
        fullWidth
        value={fromInputProps.value !== undefined ? fromInputProps.value : inputValues.from}
        onChange={onInputValueChange('from')}
        containerClassName={styles.FromInput}
      />
      <TextInput
        {...toInputProps}
        fullWidth
        value={toInputProps.value !== undefined ? toInputProps.value : inputValues.to}
        onChange={onInputValueChange('to')}
        containerClassName={styles.ToInput}
      />
    </div>
  );
};

export default typedMemo(FromToInput);
