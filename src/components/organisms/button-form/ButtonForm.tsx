import { Card, useOutsideClickEvent, useOutsideClickWithRef } from '@my-ui/core';
import classNames from 'classnames';
import {
  CSSProperties,
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './ButtonForm.module.scss';

export interface ButtonFormRenderArguments {
  opened: boolean;

  open(): void;
  close(): void;
}

export interface ButtonFormProps {
  showPosition?: 'left' | 'right';
  className?: string;
  cardClassName?: string;
  children: ReactNode | ((buttonFormRenderArguments: ButtonFormRenderArguments) => ReactNode);
  style?: CSSProperties;

  getContainerProps?(
    buttonFormRenderArguments: ButtonFormRenderArguments
  ): DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  renderOpenElement(buttonFormRenderArguments: ButtonFormRenderArguments): ReactNode;
}

const ButtonForm: FC<ButtonFormProps> = ({
  renderOpenElement,
  children,
  getContainerProps,
  className,
  cardClassName,
  style,
  showPosition: showPositionProp
}) => {
  const [showPosition, setShowPosition] = useState(showPositionProp);

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

  useOutsideClickWithRef(buttonFormContainerRef, () => setOpenedForm(false));

  return (
    <div
      {...(getContainerProps?.(buttonFormRenderArguments) || {})}
      className={classNames(styles.ButtonForm, className)}
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
        <Card
          style={style}
          className={classNames(styles['ButtonForm__content'], cardClassName, {
            [styles[`ButtonForm__content--${showPosition}`]]: showPosition
          })}>
          <div
            ref={(element) => {
              if (!element) return;

              const scrollContainer = element.closest('[data-scroll-container]');

              if (!scrollContainer) return;

              const { right: scrollContainerRight } = scrollContainer.getBoundingClientRect();
              const { right: elementRight, width: elementWidth } = element.getBoundingClientRect();

              if (elementRight + elementWidth > scrollContainerRight) setShowPosition('right');
            }}>
            {typeof children === 'function' ? children(buttonFormRenderArguments) : children}
          </div>
        </Card>
      </CSSTransition>
    </div>
  );
};

export default ButtonForm;
