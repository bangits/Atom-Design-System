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
  col
}) => {
  const [toggle, setToggle] = useState<boolean>(isEdit);

  const onToggle = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

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
