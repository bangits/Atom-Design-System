import { ReactNode } from 'react';
import { Card } from '@my-ui/core';
import classNames from 'classnames';
import styles from './SidebarAdditionalField.module.scss';

export interface SidebarAddittionalFieldsProps {
  label: string;
  field: string | ReactNode;
  fieldVariant?: 'text' | 'chip';
  noDataText?: ReactNode;
  addSpacings?: boolean;
}

export const SidebarAddittionalField = ({ label, noDataText, addSpacings, field, fieldVariant = 'text' }) => {
  return (
    <Card
      borderRadius={1.6}
      className={classNames(styles.StatusView, {
        [styles['StatusView--with-spacings']]: addSpacings
      })}>
      <span>{label}</span>
      <div className={styles['StatusView--container']}></div>
      <div className={styles[`StatusView--${fieldVariant}`]}>{field || noDataText}</div>
    </Card>
  );
};
