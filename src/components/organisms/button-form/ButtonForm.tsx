import { Card, useOutsideClickEvent } from '@my-ui/core';
import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './ButtonForm.module.scss';

export interface ButtonFormRenderArguments {
  opened: boolean;

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
  const buttonFormContainerRef = useRef<HTMLDivElement>(null);

  const [isOpenedForm, setOpenedForm] = useState(false);

  const buttonFormRenderArguments = useMemo<ButtonFormRenderArguments>(
    () => ({
      open: () => setOpenedForm(true),
      close: () => setOpenedForm(false),
      opened: isOpenedForm
    }),
    [setOpenedForm]
  );

  const { subscribe, unsubscribe } = useOutsideClickEvent(`.${styles.ButtonForm}`);

  useEffect(() => {
    subscribe(() => setOpenedForm(false));

    return () => unsubscribe();
  }, [subscribe, unsubscribe]);

  return (
    <div
      {...(getContainerProps?.(buttonFormRenderArguments) || {})}
      className={styles.ButtonForm}
      ref={buttonFormContainerRef}>
      {renderOpenElement(buttonFormRenderArguments)}

      <CSSTransition
        in={isOpenedForm}
        timeout={300}
        classNames={{
          enter: styles['ButtonForm__content--open'],
          enterActive: styles['ButtonForm__content--open'],
          enterDone: styles['ButtonForm__content--open']
        }}
        unmountOnExit>
        <Card className={styles['ButtonForm__content']}>
          {typeof children === 'function' ? children(buttonFormRenderArguments) : children}
        </Card>
      </CSSTransition>
    </div>
  );
};

export default ButtonForm;
