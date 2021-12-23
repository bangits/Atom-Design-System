import { FC } from 'react';
import styles from './Divider.module.scss';

export const Divider: FC = ({ children }) => {
  return <div className={styles.Divider}>{children}</div>;
};
