import { Divider } from '@/atom-design-system';
import { Card } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './Options.module.scss';

export interface OptionsProps {
  children?: ReactNode;
  data: {
    name: string;
    icon: ReactNode;
    onClick: () => void;
  }[];
}

const Options: FC<OptionsProps> = ({ data, children }) => {
  return (
    <Card borderRadius={1.6} className={classNames(styles.OptionsBase)}>
      {data.map((d, index) => (
        <React.Fragment key={index}>
          <div onClick={d.onClick} className={classNames(styles['OptionsBase--core'])}>
            <Divider variant='horizontal' />
            <span className={styles['OptionsBase--description']}>{d.icon}</span>
            <span className={styles['OptionsBase--name']}>{d.name}</span>
          </div>
        </React.Fragment>
      ))}
      {children && <div className={styles['OptionsBase--children']}>{children}</div>}
    </Card>
  );
};

export default Options;
