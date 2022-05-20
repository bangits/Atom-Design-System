import { Card, StatusProps } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './UsedDevice.module.scss';

export interface UsedDeviceProps extends StatusProps {
  label: string;
  icon: ReactNode;
  noDataText?: ReactNode;
}

const UsedDevice: FC<UsedDeviceProps> = ({ label, noDataText, icon }) => {
  return (
    <Card borderRadius={1.6} className={classNames(styles.StatusView)}>
      <span>{label || noDataText}</span>
      <div className={styles['StatusView--container']}>
        <div className={styles['StatusView--icon']}>
          <>{icon}</>
        </div>
      </div>
    </Card>
  );
};

export default UsedDevice;
