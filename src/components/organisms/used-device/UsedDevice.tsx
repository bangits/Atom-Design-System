import { Icons } from '@/atom-design-system';
import { DesktopIcon } from '@/icons';
import { Card, StatusProps } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './UsedDevice.module.scss';

export interface UsedDeviceProps extends StatusProps {
  icon: ReactNode;
}
[];

const UsedDevice: FC<{ label: string; usedDevices: UsedDeviceProps[]; noDataText: string }> = ({
  usedDevices,
  noDataText,
  label
}) => {
  return (
    <Card borderRadius={1.6} className={classNames(styles.StatusView)}>
      <span>{label || noDataText}</span>
      {usedDevices.length > 0 ? (
        usedDevices.map((device) => (
          <>
            <div className={styles['StatusView--container']}>
              <div className={styles['StatusView--icon']}>
                <>{device.icon || <DesktopIcon />}</>
              </div>
            </div>
          </>
        ))
      ) : (
        <div className={styles['StatusView--container']}>
          <div className={styles['StatusView--icon']}>
            <>
              <DesktopIcon />
            </>
          </div>
        </div>
      )}
    </Card>
  );
};

export default UsedDevice;
