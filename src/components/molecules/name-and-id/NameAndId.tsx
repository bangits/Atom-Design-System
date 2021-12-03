import React, { FC } from 'react';
import styles from './NameAndId.module.scss';

export interface NameAndIdProps {
  name?: string;
  id?: string;
}

const NameAndId: FC<NameAndIdProps> = ({ name, id }) => {
  return (
    <div className={styles.NameAndIdBase}>
      <span className={styles['NameAndIdBase--name']}>{name}</span>
      <span className={styles['NameAndIdBase--id']}>{id}</span>
    </div>
  );
};

export default NameAndId;
