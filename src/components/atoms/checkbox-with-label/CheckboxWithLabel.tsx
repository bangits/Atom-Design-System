import { typedMemo } from '@/helpers';
import { Checkbox, CheckboxProps } from '@my-ui/core';
import React, { FC, useCallback, useState } from 'react';
import styles from './CheckboxWithLabel.module.scss';

export interface CheckboxWithLabelProps extends CheckboxProps {
  label?: string;
}

const CheckboxWithLabel: FC<CheckboxWithLabelProps> = ({ label, ...checkboxProps }) => {
  return (
    <div className={styles.Checkbox}>
      <div className={styles.CheckboxLabel}>
        <span>{label}</span>
      </div>
      <div className={styles.CheckboxContainer}>
        <div className={styles.CheckboxWrapper}>
          <div className={styles.CheckboxContainer}>
            <Checkbox onChange={(e) => console.log(e.target.value)} {...checkboxProps} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default typedMemo(CheckboxWithLabel);
