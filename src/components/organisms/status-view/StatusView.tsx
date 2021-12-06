import { Card, IconButton, Icons, Status, StatusProps, Tooltip } from '@my-ui/core';
import { IconButtonProps } from '@my-ui/core/dist/components/inputs-and-elements/IconButton/IconButton';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './StatusView.module.scss';

export interface StatusInfo extends StatusProps {
  label: string;
  statusLabel: string;
  actions?: {
    iconName?: keyof typeof Icons;
    onClick: IconButtonProps['onClick'];
    tooltipText?: string;
    buttonVariant?: IconButtonProps['variant'];
  }[];
}

export interface StatusViewProps {
  statusInfo: StatusInfo;
}

const StatusView: FC<StatusViewProps> = ({ statusInfo }) => {
  return (
    <Card borderRadius={1.6} className={classNames(styles.StatusView)}>
      <span>{statusInfo.label}</span>
      <div className={styles['StatusView--container']}>
        <div className={styles['StatusView--status']}>
          <Status variant={statusInfo.variant}>{statusInfo.statusLabel}</Status>
        </div>
        {statusInfo?.actions?.map((action) => {
          const IconComponent = Icons[action.iconName];

          return (
            <div className={styles['StatusView--iconButton']}>
              <Tooltip showEvent='hover' text={action.tooltipText}>
                <IconButton
                  icon={<IconComponent />}
                  onClick={action.onClick}
                  variant={action.buttonVariant ?? 'dark'}
                />
              </Tooltip>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default StatusView;
