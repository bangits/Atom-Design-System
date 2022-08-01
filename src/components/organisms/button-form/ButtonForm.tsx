import { Card } from '@my-ui/core';
import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode, useMemo, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './ButtonForm.module.scss';

export interface ButtonFormRenderArguments {
  open(): void;
  close(): void;
}

export interface ButtonFormProps {
  children: ReactNode | ((buttonFormRenderArguments: ButtonFormRenderArguments) => ReactNode);
  getContainerProps?(
    buttonFormRenderArguments: ButtonFormRenderArguments
  ): DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  renderOpenElement(buttonFormRenderArguments: ButtonFormRenderArguments): ReactNode;
}

const ButtonForm: FC<ButtonFormProps> = ({ renderOpenElement, children, getContainerProps }) => {
  const [isOpenedForm, setOpenedForm] = useState(false);

  const buttonFormRenderArguments = useMemo<ButtonFormRenderArguments>(
    () => ({
      open: () => setOpenedForm(true),
      close: () => setOpenedForm(false)
    }),
    [setOpenedForm]
  );

  return (
    <div {...(getContainerProps?.(buttonFormRenderArguments) || {})} className={styles.ButtonForm}>
      {renderOpenElement(buttonFormRenderArguments)}

      <CSSTransition
        in={isOpenedForm}
        timeout={300}
        classNames={{ enter: styles['ButtonForm__content--close'], exit: styles['ButtonForm__content--close'] }}
        unmountOnExit>
        <Card className={styles['ButtonForm__content']}>
          {typeof children === 'function' ? children(buttonFormRenderArguments) : children}
        </Card>
      </CSSTransition>
    </div>
  );
};

export default ButtonForm;
