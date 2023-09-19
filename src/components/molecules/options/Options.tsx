import { Divider } from '@/atom-design-system';
import { Card, useOutsideClickEvent } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC, ReactNode, useEffect } from 'react';
import styles from './Options.module.scss';

export type OptionData =
  | {
      name: string;
      icon?: ReactNode;
      download?: boolean;
      link?: string;
      onClick: () => void;
    }[]
  | string[]
  | string;

export interface OptionsProps {
  children?: ReactNode;
  data: OptionData;
  fitContent?: boolean;

  outsideClickClassName?: string;
  emptyValue?: string;
  click?: (data: OptionData) => void;
  opacity?: boolean;
  onOutsideClick?(): void;
}

const Options: FC<OptionsProps> = ({
  data,
  opacity = true,
  fitContent = false,
  emptyValue,
  children,
  onOutsideClick,
  click,
  outsideClickClassName
}) => {
  const { subscribe, unsubscribe } = useOutsideClickEvent(outsideClickClassName || `.${styles.OptionsBase}`);

  useEffect(() => {
    subscribe(() => onOutsideClick?.());

    return unsubscribe;
  }, [onOutsideClick]);

  return (
    <Card
      borderRadius={1.6}
      className={classNames(styles.OptionsBase, {
        [styles['OptionsBase--fitContent']]: fitContent
      })}>
      {Array.isArray(data) ? (
        data.map((d, index) => (
          <React.Fragment key={index}>
            {d.download ? (
              <div
                onClick={d.onClick}
                className={classNames(styles['OptionsBase--core'], {
                  [styles['OptionsBase--core-opacity']]: opacity
                })}>
                <a
                  style={{ color: '#505d6e', textDecoration: 'none', width: '100%' }}
                  download='foo.png'
                  href={d.download ? d.link : ''}>
                  <Divider variant='horizontal' />
                  {d.icon && <span className={styles['OptionsBase--description']}>{d.icon}</span>}
                  <span className={styles['OptionsBase--name']}>{d.name}</span>
                </a>
              </div>
            ) : !d.name ? (
              <div
                onClick={() => click(d)}
                className={classNames(styles['OptionsBase--core'], {
                  [styles['OptionsBase--core-single']]: data?.length <= 1
                })}>
                <Divider variant='horizontal' />
                <span className={styles['OptionsBase--name']}>{d}</span>
              </div>
            ) : (
              <div onClick={d.onClick} className={classNames(styles['OptionsBase--core'])}>
                <Divider variant='horizontal' />
                <span className={styles['OptionsBase--description']}>{d.icon}</span>
                <span className={styles['OptionsBase--name']}>{d.name}</span>
              </div>
            )}
          </React.Fragment>
        ))
      ) : (
        <div className={classNames(styles['OptionsBase--core'])}>
          <Divider variant='horizontal' />
          <span className={styles['OptionsBase--name']}>{emptyValue}</span>
        </div>
      )}
      {children && <div className={styles['OptionsBase--children']}>{children}</div>}
    </Card>
  );
};

export default Options;
