import { typedMemo } from '@/helpers';
import { Checkbox, CheckboxProps } from '@my-ui/core';
import classNames from 'classnames';
import { FC } from 'react';
import styles from './CheckboxWithLabel.module.scss';

export interface CheckboxWithLabelProps extends CheckboxProps {
  label?: string;
  variant?: 'checkbox' | 'switch';
}

const CheckboxWithLabel: FC<CheckboxWithLabelProps> = ({
  label,
  className,
  variant = 'checkbox',
  ...checkboxProps
}) => {
  const { disabled } = checkboxProps;

  return (
    <label
      className={classNames(
        styles.Checkbox,
        styles[`Checkbox--${variant}`],
        {
          [styles['Checkbox--disabled']]: disabled
        },
        className
      )}>
      <span className={styles.CheckboxLabel}>{label}</span>
      <span className={styles.CheckboxContainer}>
        <Checkbox {...checkboxProps} variant={variant} />
      </span>
    </label>
  );
};

export default typedMemo(CheckboxWithLabel);
