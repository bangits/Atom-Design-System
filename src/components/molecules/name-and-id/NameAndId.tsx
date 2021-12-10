import React, { FC, ReactNode } from 'react';
import styles from './NameAndId.module.scss';

export interface NameAndIdProps {
  name?: ReactNode;
  id?: ReactNode;
  noDataText?: ReactNode;
}

const NameAndId: FC<NameAndIdProps> = ({ name, id, noDataText }) => {
  return (
    <div className={styles.NameAndIdBase}>
      <span className={styles['NameAndIdBase--name']}>{name || noDataText}</span>
      <span className={styles['NameAndIdBase--id']}>{id || noDataText}</span>
    </div>
  );
};

export default NameAndId;
