import { FC } from 'react';
import styles from './Divider.module.scss';

export const Divider: FC<{ showDivider?: boolean }> = ({ children, showDivider = true }) => {
  if (!showDivider) return <>{children}</>;

  return <div className={styles.Divider}>{children}</div>;
};
