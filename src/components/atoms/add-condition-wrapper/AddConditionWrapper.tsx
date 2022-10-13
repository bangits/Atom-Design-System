import { FC, PropsWithChildren, ReactNode } from 'react';
import styles from './AddConditionWrapper.module.scss';

export interface AddConditionWrapperProps {
  bottomPart?: ReactNode;
}

const AddConditionWrapper: FC<PropsWithChildren<AddConditionWrapperProps>> = ({ children, bottomPart }) => {
  return (
    <div className={styles.AddConditionWrapper}>
      {children}
      {bottomPart && <div className={styles.AddConditionWrapper__BottomPart}>{bottomPart}</div>}
    </div>
  );
};

export default AddConditionWrapper;
