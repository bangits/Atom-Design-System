import { EditedForm, EditedFormProps, EditForm, EditFormProps } from '@/components';
import React, { FC, ReactNode, useCallback, useState } from 'react';

export interface FlexibleFormProps {
  editedFormProps?: EditedFormProps;
  editFormProps?: EditFormProps;
  isEdit?: boolean;
  noDataText?: ReactNode;
  onSubmit?: (onToggle: () => void) => void;
  title: ReactNode;
  editModeChildren?: ReactNode;
  editedModeChildren?: ReactNode;
  col?: 6 | 12;
  onClose?: () => void;
  showEditIcons?: boolean;
}

const FlexibleForm: FC<FlexibleFormProps> = ({
  editedFormProps,
  editFormProps,
  isEdit = false,
  onSubmit,
  noDataText,
  title,
  editModeChildren,
  editedModeChildren,
  col,
  onClose,
  showEditIcons = true
}) => {
  const [toggle, setToggle] = useState<boolean>(isEdit);

  const onToggle = useCallback(() => {
    if (toggle && onClose) onClose();

    setToggle(!toggle);
  }, [toggle, onClose]);

  return (
    <>
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
        <EditedForm
          {...editedFormProps}
          showEditIcons={showEditIcons}
          onToggle={onToggle}
          title={title}
          noDataText={noDataText}
          children={editedModeChildren}
          col={col}
        />
      )}
    </>
  );
};

export default FlexibleForm;
