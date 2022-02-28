import classNames from 'classnames';
import { FC } from 'react';
import styles from './Divider.module.scss';

export const Divider: FC<{ showDivider?: boolean; className?: string }> = ({
  children,
  showDivider = true,
  className
}) => {
  if (!showDivider) return <>{children}</>;

  return <div className={classNames(styles.Divider, className)}>{children}</div>;
};
