import { Icons } from '@/atom-design-system';
import { Card, IconButton, Status, StatusProps, Tooltip } from '@my-ui/core';
import { IconButtonProps } from '@my-ui/core/dist/components/inputs-and-elements/IconButton/IconButton';
import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './StatusView.module.scss';

export interface StatusViewProps extends StatusProps {
  label: string;
  statusLabel: string;
  noDataText?: ReactNode;
  actions?: {
    iconName?: keyof typeof Icons;
    onClick: IconButtonProps['onClick'];
    tooltipText?: string;
    buttonVariant?: IconButtonProps['variant'];
  }[];
}

const StatusView: FC<StatusViewProps> = ({ label, statusLabel, noDataText, variant, actions }) => {
  return (
    <Card borderRadius={1.6} className={classNames(styles.StatusView)}>
      <span>{label || noDataText}</span>
      <div className={styles['StatusView--container']}>
        <div className={styles['StatusView--status']}>
          <Status variant={variant}>{statusLabel || noDataText}</Status>
        </div>
        {actions?.map((action, idx) => {
          const IconComponent = Icons[action.iconName];

          return (
            <div className={styles['StatusView--iconButton']} key={idx}>
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
