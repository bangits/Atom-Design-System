import { FC, PropsWithChildren } from 'react';
import styles from './IconDropdown.module.scss';

const IconDropdown: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <div className={styles.IconDropdown}>{children}</div>;
};

export default IconDropdown;
