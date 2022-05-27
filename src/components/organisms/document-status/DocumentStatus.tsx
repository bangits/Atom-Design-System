import { Icons } from '@/atom-design-system';
import { Card, IconButton, Status, StatusProps, Tooltip } from '@my-ui/core';
import { IconButtonProps } from '@my-ui/core/dist/components/inputs-and-elements/IconButton/IconButton';
import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './DocumentStatus.module.scss';

export interface DocumentStatusProps extends StatusProps {
  statusLabel: string;
  noDataText?: ReactNode;
  actions?: {
    iconName?: keyof typeof Icons;
    onClick: IconButtonProps['onClick'];
    tooltipText?: string;
    buttonVariant?: IconButtonProps['variant'];
  }[];
  startIcon: string;
}

const DocumentStatus: FC<DocumentStatusProps> = ({
  startIcon = 'CircleIcon',
  statusLabel,
  noDataText,
  variant,
  actions
}) => {
  const StartIconComponent = Icons[startIcon];

  return (
    <Card borderRadius={1.6} className={classNames(styles.DocumentStatus)}>
      <span>
        {' '}
        <IconButton icon={<StartIconComponent />} onClick={() => console.log()} variant='dark' />
      </span>
      <div className={styles['DocumentStatus--container']}>
        <div className={styles['DocumentStatus--status']}>
          <Status variant={variant}>{statusLabel || noDataText}</Status>
        </div>
        {actions?.map((action, idx) => {
          const IconComponent = Icons[action.iconName];

          return (
            <div className={styles['DocumentStatus--iconButton']} key={idx}>
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

export default DocumentStatus;
