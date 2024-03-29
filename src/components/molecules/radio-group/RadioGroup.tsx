import { typedMemo } from '@/helpers/typedMemo';
import { RadioGroup as MyUIRadioGroup, RadioGroupProps as MyUIRadioGroupProps, RadioButton } from '@my-ui/core';
import classNames from 'classnames';
import { FC } from 'react';
import styles from './RadioGroup.module.scss';

export interface RadioType {
  value: string | number;
  label: string;
}

export interface RadioGroupProps extends MyUIRadioGroupProps {
  label?: string;
  radios?: RadioType[];
  disabled?: boolean;
  variant?: 'vertical' | 'horizontal';
}

const RadioGroup: FC<RadioGroupProps> = ({ disabled, radios, label, variant, ...radioGroupProps }) => {
  return (
    <>
      <div>
        <span className={styles.FilterRadioName}>{label}</span>
        <MyUIRadioGroup {...radioGroupProps}>
          <div
            className={classNames(styles.FilterRadioContainer, {
              [styles['FilterRadioContainer--disabled']]: disabled,
              [styles[`FilterRadioContainer--${variant}`]]: variant
            })}>
            {radios.map((radio) => (
              <div className={styles.FilterRadioGroup} key={radio.value}>
                <div className={styles.FilterRadio}>
                  <RadioButton
                    disabled={disabled}
                    name={radioGroupProps.name}
                    id={radio.value?.toString()}
                    {...radioGroupProps}
                    value={radio.value?.toString()}
                  />
                </div>
                <label className={styles.FilterRadioLabel} htmlFor={radio.value?.toString()}>
                  {radio.label}
                </label>
              </div>
            ))}
          </div>
        </MyUIRadioGroup>
      </div>
    </>
  );
};

export default typedMemo(RadioGroup);
