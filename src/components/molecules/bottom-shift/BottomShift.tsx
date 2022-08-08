import { Card, IconButton, Icons } from '@my-ui/core';
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
        return (
          <>
            <div
              role='button'
              className={classNames(styles['BottomShift__blur'], {
                [styles['BottomShift__blur--open']]: status !== 'exited' && status !== 'exiting'
              })}
              onClick={onClose}
            />

            <Card
              className={classNames(styles.BottomShift, {
                [styles['BottomShift--open']]: status !== 'exited' && status !== 'exiting'
              })}>
              {children}

              <IconButton onClick={onClose} icon={<Icons.CloseIcon />} className={styles['BottomShift__close']} />
            </Card>
          </>
        );
      }}
    </CSSTransition>
  );
};

export default BottomShift;
