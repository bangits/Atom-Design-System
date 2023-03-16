import { Card, IconButton, Icons, Portal } from '@my-ui/core';
import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './BottomShift.module.scss';

export interface BottomShiftProps {
  opened?: boolean;

  onClose?(): void;
}

const BottomShift: FC<PropsWithChildren<BottomShiftProps>> = ({ children, opened, onClose }) => {
  return (
    <CSSTransition in={opened} timeout={300} unmountOnExit>
      {(status) => {
        const isOpened = status !== 'exited' && status !== 'exiting';

        return (
          <Portal>
            <Card
              className={classNames(styles.BottomShift, {
                [styles['BottomShift--open']]: isOpened
              })}>
              {children}

              <IconButton
                onClick={onClose}
                icon={<Icons.CloseIcon />}
                className={classNames(styles['BottomShift__close'], {
                  [styles['BottomShift__close--open']]: isOpened
                })}
              />
            </Card>
          </Portal>
        );
      }}
    </CSSTransition>
  );
};

export default BottomShift;
