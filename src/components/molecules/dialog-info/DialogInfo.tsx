import { Loader } from '@/components/atoms/loader';
import { Scroll, Typography } from '@my-ui/core';
import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import styles from './DialogInfo.module.scss';

export interface DialogInfoProps {
  options: {
    label: ReactNode;
    value: ReactNode;
  }[];

  isLoading: boolean;
}

const DialogInfo: FC<DialogInfoProps> = ({ options, isLoading }) => {
  return (
    <div
      className={classNames(styles.DialogInfo, {
        [styles['DialogInfo--Loading']]: isLoading
      })}>
      {options?.length > 0 && (
        <Scroll className={styles.DialogInfo__Scroll} height='47.5rem' showHorizontalScroll={false}>
          <ul className={styles.DialogInfo__List}>
            {options.map(
              (o) =>
                o.value && (
                  <li key={o.label.toString()} className={styles.DialogInfo__Item}>
                    <Typography className={styles.DialogInfo__Label} variant='p5' color='primary'>
                      {o.label}
                    </Typography>

                    <Typography className={styles.DialogInfo__Value} variant='p4'>
                      {o.value}
                    </Typography>
                  </li>
                )
            )}
          </ul>
        </Scroll>
      )}

      {isLoading && <Loader />}
    </div>
  );
};

export default DialogInfo;
