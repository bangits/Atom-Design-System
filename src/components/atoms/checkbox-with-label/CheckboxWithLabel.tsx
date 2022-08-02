import { typedMemo } from '@/helpers';
import { Checkbox, CheckboxProps } from '@my-ui/core';
import React, { FC, useCallback, useState } from 'react';
import styles from './Checkbox.module.scss';

export interface CheckboxWithLabelProps {
  label?: string;
  checkboxes: (CheckboxProps & { label: string })[];
  value?: CheckboxProps['value'][];
  defaultValue?: CheckboxProps['value'][];
  onChange?: (checkedCheckboxes: CheckboxProps['value'][]) => void;
}

const CheckboxWithLabel: FC<CheckboxWithLabelProps> = ({ label, checkboxes, value, defaultValue, onChange }) => {
  const [checkedCheckboxes, setCheckedCheckboxes] = useState<typeof value>(defaultValue || []);

  const onCheckboxChange = useCallback(
    (checkboxValue: CheckboxProps['value']) => (e: React.ChangeEvent<HTMLInputElement>) => {
      let updatedValues: typeof value;

      if (value === undefined) {
        updatedValues = e.target.checked
          ? [...checkedCheckboxes, checkboxValue]
          : checkedCheckboxes.filter((checkboxId) => checkboxId !== checkboxValue);

        setCheckedCheckboxes(updatedValues);
      } else
        updatedValues = e.target.checked
          ? [...value, checkboxValue]
          : value.filter((checkboxId) => checkboxId !== checkboxValue);

      if (onChange) onChange(updatedValues);
    },
    [checkedCheckboxes, value]
  );

  return (
    <div className={styles.Checkbox}>
      <div className={styles.CheckboxLabel}>
        <span>{label}</span>
      </div>
      <div className={styles.CheckboxContainer}>
        {checkboxes?.map((checkbox) => {
          return (
            <div className={styles.CheckboxWrapper} key={checkbox.name}>
              <div className={styles.CheckboxContainer}>
                <Checkbox
                  onChange={onCheckboxChange(checkbox.value)}
                  checked={(value || checkedCheckboxes).includes(checkbox.value)}
                  disabled={checkbox.disabled}
                  id={checkbox.name}
                />
              </div>
              <label htmlFor={checkbox.name} className={styles.CheckboxLabel}>
                {checkbox.label}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default typedMemo(CheckboxWithLabel);
