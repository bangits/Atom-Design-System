import { Card } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './LastActivityView.module.scss';

export interface LastActivityViewProps {
  lastActivity: {
    title: string;
    info: {
      label: string;
      date: string | number;
    }[];
  };
}

const LastActivityView: FC<LastActivityViewProps> = ({ lastActivity }) => {
  return (
    <Card borderRadius={1.6} className={classNames(styles.LastActivityView)}>
      <span>{lastActivity.title}</span>
      <div className={classNames(styles['LastActivityView--container'])}>
        {lastActivity.info.map((i) => (
          <div key={i.label}>
            <span className={classNames(styles['LastActivityView--label'])}>{i.label}</span>
            <span className={classNames(styles['LastActivityView--date'])}>{i.date}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default LastActivityView;
