import { typedMemo } from '@/helpers';
import { InfoTooltipIcon } from '@/icons';
import { Checkbox, CheckboxProps, Tooltip } from '@my-ui/core';
import classNames from 'classnames';
import { FC } from 'react';
import styles from './CheckboxWithLabel.module.scss';

export interface CheckboxWithLabelProps extends CheckboxProps {
  label?: string;
  startLabel?: string;
  variant?: 'checkbox' | 'switch';
  tooltipText?: string;
}

const CheckboxWithLabel: FC<CheckboxWithLabelProps> = ({
  label,
  startLabel,
  className,
  variant = 'checkbox',
  tooltipText,
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
      <span>
        {tooltipText && (
          <Tooltip text={tooltipText}>
            <InfoTooltipIcon className={styles['Checkbox-tooltip']} width='1.5rem' height='1.5rem' />
          </Tooltip>
        )}
      </span>
      <span className={styles.CheckboxLabel}>{label}</span>
      <div className={styles.CheckboxContainer}>
        <Checkbox {...checkboxProps} variant={variant} />
      </div>
      <span className={styles.CheckboxLabel}>{startLabel}</span>
    </label>
  );
};

export default typedMemo(CheckboxWithLabel);
