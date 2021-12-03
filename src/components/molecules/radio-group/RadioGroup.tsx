import { typedMemo } from '@/helpers/typedMemo';
import { RadioButton, RadioGroup as MyUIRadioGroup, RadioGroupProps as MyUIRadioGroupProps } from '@my-ui/core';
import { FC } from 'react';
import styles from './RadioGroup.module.scss';

export interface RadioType {
  value: string | number;
  label: string;
}

export interface RadioGroupProps extends MyUIRadioGroupProps {
  label?: string;
  radios?: RadioType[];
}

const RadioGroup: FC<RadioGroupProps> = ({ radios, label, ...radioGroupProps }) => {
  return (
    <>
      <div>
        <span className={styles.FilterRadioName}>{label}</span>
        <MyUIRadioGroup {...radioGroupProps}>
          <div className={styles.FilterRadioContainer}>
            {radios.map((radio) => (
              <div className={styles.FilterRadioGroup} key={radio.value}>
                <div className={styles.FilterRadio}>
                  <RadioButton
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
