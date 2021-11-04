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
      },
    []
  );

  useEffect(() => {
    if (fromInputProps.value) setInputValues({ from: fromInputProps.value });

    if (toInputProps.value) setInputValues({ to: toInputProps.value });
  }, [fromInputProps.value, toInputProps.value]);

  return (
    <div className={styles.FromToInputContainer}>
      <TextInput
        {...fromInputProps}
        fullWidth
        value={inputValues.from}
        onChange={onInputValueChange('from')}
        containerClassName={styles.FromInput}
      />
      <TextInput
        {...toInputProps}
        fullWidth
        value={inputValues.to}
        onChange={onInputValueChange('to')}
        containerClassName={styles.ToInput}
      />
    </div>
  );
};

export default typedMemo(FromToInput);
