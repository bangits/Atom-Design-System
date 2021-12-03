import { Card, Status, StatusProps } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './StatusView.module.scss';

export interface StatusInfo extends StatusProps {
  label: string;
  statusLabel: string;
  actions?: ReactNode[];
}

export interface StatusViewProps {
  statusInfo: StatusInfo;
}

const StatusView: FC<StatusViewProps> = ({ statusInfo }) => {
  return (
    <Card borderRadius={1.6} className={classNames(styles.StatusView)}>
      <span>{statusInfo.label}</span>
      <div className={styles['StatusView--container']}>
        <Status variant={statusInfo.variant}>{statusInfo.statusLabel}</Status>
        {statusInfo?.actions?.map((action) => (
          <div className={styles['StatusView--iconButton']}>{action}</div>
        ))}
      </div>
    </Card>
  );
};

export default StatusView;
