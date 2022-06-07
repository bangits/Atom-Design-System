import { Icons } from '@/atom-design-system';
import { Card, Status, StatusProps } from '@my-ui/core';
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
  pageQuantity?: number;
  pageLabel?: string;
}

const DocumentStatus: FC<DocumentStatusProps> = ({
  startIcon = 'CircleIcon',
  statusLabel,
  noDataText,
  variant,
  actions,
  pageQuantity,
  pageLabel
}) => {
  return (
    <Card borderRadius={1.6} className={classNames(styles.DocumentStatus)}>
      <div
        style={{ display: 'flex', alignItems: 'center' }}
        className={classNames(styles['DocumentStatus--icon-button'])}>
        <div className={classNames(styles['DocumentStatus--svg'])}>
          <Icons.PagesIcon />
        </div>
        <div>
          {pageQuantity} {pageLabel}
        </div>
      </div>
      <div className={styles['DocumentStatus--container']}>
        <div className={styles['DocumentStatus--status']}>
          <Status variant={variant}>{statusLabel || noDataText}</Status>
        </div>
        {/* {actions?.map((action, idx) => {
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
        })} */}
      </div>
    </Card>
  );
};

export default DocumentStatus;
