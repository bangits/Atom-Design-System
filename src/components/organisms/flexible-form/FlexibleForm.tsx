import { EditedForm, EditedFormProps, EditForm, EditFormProps } from '@/components';
import { FC, ReactNode, useCallback, useState } from 'react';

export interface FlexibleFormProps {
  editedFormProps?: EditedFormProps;
  editFormProps?: EditFormProps;
  isEdit?: boolean;
  noDataText?: ReactNode;
  onSubmit?: (onToggle: () => void) => void;
  title: ReactNode;
  tooltipText?: string;
  editModeChildren?: ReactNode;
  editedModeChildren?: ReactNode;
  col?: 6 | 12;
  showEditForm?: boolean;
  onClose?: () => void;
  onToggle?(): void;
}

const FlexibleForm: FC<FlexibleFormProps> = ({
  editedFormProps,
  editFormProps,
  isEdit = false,
  onSubmit,
  noDataText,
  title,
  tooltipText,
  editModeChildren,
  editedModeChildren,
  col,
  onClose,
  showEditForm,
  onToggle: onToggleProp
}) => {
  // eslint-disable-next-line prefer-const
  let [toggle, setToggle] = useState<boolean>(isEdit);

  if (showEditForm !== undefined) toggle = showEditForm;

  const onToggle = useCallback(() => {
    onToggleProp?.();

    if (toggle && onClose) onClose();

    setToggle(!toggle);
  }, [toggle, onClose, onToggleProp]);

  return (
    <>
      {toggle ? (
        <EditForm
          {...editFormProps}
          onToggle={onToggle}
          title={title}
          tooltipText={tooltipText}
          onSubmit={onSubmit}
          children={editModeChildren}
          col={col}
        />
      ) : (
        <EditedForm
          {...editedFormProps}
          onToggle={onToggle}
          title={title}
          tooltipText={tooltipText}
          noDataText={noDataText}
          children={editedModeChildren}
          col={col}
        />
      )}
    </>
  );
};

export default FlexibleForm;
