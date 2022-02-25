import { FromToInput, FromToInputProps, FromToValues } from '@/components';
import { ApplyIcon } from '@/icons';
import { Scroll, Tag, TextInputProps, Tooltip } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC, useCallback, useState } from 'react';
import styles from './AddProviderNameId.module.scss';

export type ValueType = {
  id: number;
  providerName: TextInputProps['value'];
  externalId: TextInputProps['value'];
};

export interface AddProviderNameIdProps {
  onChange: (value: ValueType[], isAdded?: boolean) => void;
  fromToProps?: FromToInputProps;
  toolTipTitle?: string;
}

const AddProviderNameId: FC<AddProviderNameIdProps> = ({ fromToProps, onChange, toolTipTitle }) => {
  const [values, setValues] = useState<ValueType[]>([]);
  const [inputValues, setInputValues] = useState<FromToValues>({
    from: '',
    to: ''
  });
  const isValid = inputValues.from && inputValues.to;

  const onApplyHandler = useCallback(() => {
    if (isValid) {
      const updatedValues = [
        ...values,
        { id: values.length + 1, providerName: inputValues.from, externalId: inputValues.to }
      ];
      setValues(updatedValues);

      setInputValues({
        from: '',
        to: ''
      });

      onChange?.(updatedValues, !!isValid);

      return;
    }
  }, [inputValues, values]);

  const onDeleteTagHandler = useCallback(
    (id) => {
      const updatedValues = [...values.filter((value) => value.id !== id)];
      setValues(updatedValues);
      onChange?.(updatedValues, !!isValid);
    },
    [values]
  );

  return (
    <div className={styles.AddProviderNameIdContainer}>
      <div className={styles['AddProviderNameIdContainer--inputs']}>
        <FromToInput
          {...fromToProps}
          fromInputProps={{
            value: inputValues.from,
            ...fromToProps?.fromInputProps
          }}
          toInputProps={{
            value: inputValues.to,
            ...fromToProps?.toInputProps
          }}
          onChange={(value) => setInputValues(value)}
        />
        <Tooltip showEvent='hover' text={toolTipTitle}>
          <ApplyIcon
            onClick={onApplyHandler}
            className={classNames({
              [styles['AddProviderNameIdContainer--button-disabled']]: !(inputValues.from && inputValues.to)
            })}
          />
        </Tooltip>
      </div>
      <Scroll height='176px'>
        <div className={styles.TagsContainer}>
          {values.map((value) => (
            <Tag
              key={value.id}
              title={`${value.providerName} - ${value.externalId}`}
              closeIcon
              color={'primary'}
              onClose={() => onDeleteTagHandler(value.id)}
            />
          ))}
        </div>
      </Scroll>
    </div>
  );
};

export default AddProviderNameId;
