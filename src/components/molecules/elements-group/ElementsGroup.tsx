import { FC, ReactNode } from 'react';
import styles from './ElementsGroup.module.scss';

export interface ElementsGroupProps {
  children: ReactNode;
}

const ElementsGroup: FC<ElementsGroupProps> = ({ children }) => {
  return <div className={styles.ElementsGroup}>{children}</div>;
};

export default ElementsGroup;
