import { TextInput } from '@my-ui/core';
import React, { FC } from 'react';
import styles from './DataTable.module.scss';

export interface DataTableProps {
  renderInputs?: (InputComponent: typeof TextInput, name: string) => JSX.Element;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  loginErrorMessage?: string;
  usernameInputLabel: string;
  passwordInputLabel: string;
  buttonProps?: string;
}

const DataTable: FC<DataTableProps> = ({}) => {
  return <div className={styles.DataTablePageWrapper}>saasd</div>;
};

export default DataTable;
