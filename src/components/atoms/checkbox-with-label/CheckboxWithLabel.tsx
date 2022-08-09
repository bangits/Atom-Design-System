import { typedMemo } from '@/helpers';
import { Checkbox, CheckboxProps } from '@my-ui/core';
import classNames from 'classnames';
import { FC } from 'react';
import styles from './CheckboxWithLabel.module.scss';

export interface CheckboxWithLabelProps extends CheckboxProps {
  label?: string;
}

const CheckboxWithLabel: FC<CheckboxWithLabelProps> = ({ label, className, ...checkboxProps }) => {
  return (
    <label className={classNames(styles.Checkbox, className)}>
      <span className={styles.CheckboxLabel}>{label}</span>
      <span className={styles.CheckboxContainer}>
        <Checkbox {...checkboxProps} />
      </span>
    </label>
  );
};

export default typedMemo(CheckboxWithLabel);
