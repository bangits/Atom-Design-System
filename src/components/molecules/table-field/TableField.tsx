import classNames from 'classnames';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import styles from './TableField.module.scss';
import { FC } from 'react';

export interface TableFieldProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  backgroundColor?: string;
}

export const TableField: FC<TableFieldProps> = ({ backgroundColor, ...props }) => {
  return (
    <input
      style={backgroundColor && { background: backgroundColor }}
      autoComplete='off'
      className={classNames(styles.Field, {
        [styles[`Field--disabled`]]: props.disabled
      })}
      {...props}
    />
  );
};
