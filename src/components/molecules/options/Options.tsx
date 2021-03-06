import { Divider } from '@/atom-design-system';
import { Card, useOutsideClickEvent } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC, ReactNode, useEffect } from 'react';
import styles from './Options.module.scss';

export interface OptionsProps {
  children?: ReactNode;
  data: {
    name: string;
    icon: ReactNode;
    download?: boolean;
    link?: string;
    onClick: () => void;
  }[];
  onOutsideClick?(): void;
}

const Options: FC<OptionsProps> = ({ data, children, onOutsideClick }) => {
  const { subscribe, unsubscribe } = useOutsideClickEvent(`.${styles.OptionsBase}`);

  useEffect(() => {
    subscribe(() => onOutsideClick?.());

    return unsubscribe;
  }, [onOutsideClick]);

  return (
    <Card borderRadius={1.6} className={classNames(styles.OptionsBase)}>
      {data.map(
        (d, index) =>
          d.icon && (
            <>
              <React.Fragment key={index}>
                {d.download ? (
                  <div onClick={d.onClick} className={classNames(styles['OptionsBase--core'])}>
                    <a
                      style={{ color: '#505d6e', textDecoration: 'none', width: '100%' }}
                      download='foo.png'
                      href={d.download ? d.link : ''}>
                      <Divider variant='horizontal' />
                      <span className={styles['OptionsBase--description']}>{d.icon}</span>
                      <span className={styles['OptionsBase--name']}>{d.name}</span>
                    </a>
                  </div>
                ) : (
                  <div onClick={d.onClick} className={classNames(styles['OptionsBase--core'])}>
                    <Divider variant='horizontal' />
                    <span className={styles['OptionsBase--description']}>{d.icon}</span>
                    <span className={styles['OptionsBase--name']}>{d.name}</span>
                  </div>
                )}
              </React.Fragment>
            </>
          )
      )}
      {children && <div className={styles['OptionsBase--children']}>{children}</div>}
    </Card>
  );
};

export default Options;
