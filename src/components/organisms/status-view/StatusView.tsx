import { Card, Status, StatusProps } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './StatusView.module.scss';

export interface StatusInfo extends StatusProps {
  label: string;
  statusLabel: string;
}

export interface StatusViewProps {
  statusInfo: StatusInfo;
}

const StatusView: FC<StatusViewProps> = ({ statusInfo }) => {
  return (
    <Card borderRadius={1.6} className={classNames(styles.StatusView)}>
      <span>{statusInfo.label}</span>
      <Status variant={statusInfo.variant}>{statusInfo.statusLabel}</Status>
    </Card>
  );
};

export default StatusView;
