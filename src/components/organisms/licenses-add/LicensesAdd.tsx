import React, { FC, ReactNode, useCallback, useState } from 'react';
import { EditForm, EditFormProps, LicensesCard, LicensesCardProps } from '..';
import styles from './LicensesAdd.module.scss';

export interface LicensesAddProps {
  editFormProps?: EditFormProps;
  isEdit?: boolean;
  noDataText?: ReactNode;
  onSubmit?: (onToggle: () => void) => void;
  title?: ReactNode;
  editModeChildren?: ReactNode;
  col?: 6 | 12;
  onClose?: () => void;
  addCardProps: Omit<LicensesCardProps, 'onClick' | 'col'>;
}

const LicensesAdd: FC<LicensesAddProps> = ({
  editFormProps,
  noDataText,
  isEdit = false,
  onSubmit,
  title = '',
  editModeChildren,
  col,
  onClose,
  addCardProps
}) => {
  const [toggle, setToggle] = useState<boolean>(isEdit);

  const onToggle = useCallback(() => {
    if (toggle && onClose) onClose();
    setToggle(!toggle);
  }, [toggle, onClose]);

  return (
    <div className={styles.LicenseAdd}>
      {toggle ? (
        <EditForm
          {...editFormProps}
          onToggle={onToggle}
          title={title}
          onSubmit={onSubmit}
          children={editModeChildren}
          col={col}
        />
      ) : (
        <LicensesCard {...addCardProps} onClick={onToggle} col={col} />
      )}
    </div>
  );
};

export default LicensesAdd;
