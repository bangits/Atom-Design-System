import { FromToInput, FromToInputProps, FromToValues, TextInputProps } from '@/components';
import { trim } from '@/helpers';
import { ApplySuccess } from '@/icons';
import { Scroll, Tag, Tooltip } from '@my-ui/core';
import classNames from 'classnames';
import { FC, useCallback, useMemo, useState } from 'react';
import styles from './AddProviderNameId.module.scss';

export type AddProviderNameIdValueType = {
  id: number;
  providerName: TextInputProps['value'];
  externalId: TextInputProps['value'];
};

export interface AddProviderNameIdProps {
  onChange: (value: AddProviderNameIdValueType[], isAdded?: boolean) => void;
  fromToProps?: FromToInputProps;
  tooltipTitle?: string;
  invalidTooltipTitle?: string;
  fillProviderTooltipTitle?: string;
  explanation?: string;
}

const AddProviderNameId: FC<AddProviderNameIdProps> = ({
  fromToProps,
  onChange,
  tooltipTitle,
  fillProviderTooltipTitle,
  invalidTooltipTitle,
  explanation
}) => {
  const [values, setValues] = useState<AddProviderNameIdValueType[]>([]);
  const [inputValues, setInputValues] = useState<FromToValues>({
    from: '',
    to: ''
  });

  const isValid =
    trim(inputValues.from) &&
    trim(inputValues.to) &&
    !fromToProps.fromInputProps.explanation &&
    !fromToProps.toInputProps.explanation;

  const onApplyHandler = useCallback(() => {
    const isFieldExist = values.find(
      (v) => trim(v.providerName) === trim(inputValues.from) && trim(v.externalId) === trim(inputValues.to)
    );

    if (isValid && !isFieldExist && !fromToProps.fromInputProps.explanation && !fromToProps.toInputProps.explanation) {
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

  const applyIconColor = useMemo(
    () => (explanation ? ('danger' as const) : !explanation && isValid ? ('success' as const) : null),
    [explanation, isValid]
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
          onChange={(values) => setInputValues(values)}
        />
        <Tooltip
          color={applyIconColor || 'primary'}
          showEvent='hover'
          text={
            applyIconColor === 'danger'
              ? fillProviderTooltipTitle
              : applyIconColor === 'success'
              ? tooltipTitle
              : invalidTooltipTitle
          }>
          <ApplySuccess
            onClick={onApplyHandler}
            className={classNames({
              [styles['AddProviderNameIdContainer--button-disabled']]: !applyIconColor,
              [styles[`AddProviderNameIdContainer--button-${applyIconColor}`]]: applyIconColor,
              [styles['AddProviderNameIdContainer--button-pulse']]: !!explanation
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
