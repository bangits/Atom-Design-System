import classNames from 'classnames';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import styles from './TableField.module.scss';
import { FC } from 'react';

export interface TableFieldProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  backgroundColor?: string;
  writeMode?: boolean;
}

export const TableField: FC<TableFieldProps> = ({ backgroundColor, writeMode, ...props }) => {
  return (
    <input
      style={backgroundColor && { background: backgroundColor }}
      autoComplete='off'
      className={classNames(styles.Field, {
        [styles[`Field--disabled`]]: props.disabled,
        [styles[`Field--write-mode`]]: writeMode
      })}
      {...props}
    />
  );
};
