import { Icons } from '@/atom-design-system';
import { Card, IconButton, Status, StatusProps, Tooltip } from '@my-ui/core';
import { IconButtonProps } from '@my-ui/core/dist/components/inputs-and-elements/IconButton/IconButton';
import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import styles from './StatusView.module.scss';

export interface StatusViewProps extends StatusProps {
  label: string;
  statusLabel: string;
  noDataText?: ReactNode;
  icon?: {
    tooltipText: string;
    value: ReactNode | any;
    label: string | number;
    onIconClick?: () => void;
  };
  actions?: {
    iconName?: keyof typeof Icons;
    onClick: IconButtonProps['onClick'];
    tooltipText?: string;
    buttonVariant?: IconButtonProps['variant'];
  }[];
  addSpacings?: boolean;
}

const StatusView: FC<StatusViewProps> = ({ label, statusLabel, noDataText, variant, actions, addSpacings, icon }) => {
  return (
    <Card
      borderRadius={1.6}
      className={classNames(styles.StatusView, {
        [styles['StatusView--with-spacings']]: addSpacings
      })}>
      <span>{label || noDataText}</span>
      <div className={styles['StatusView--container']}>
        <div className={styles['StatusView--status']}>
          {!icon ? <Status variant={variant}>{statusLabel || noDataText}</Status> : null}
        </div>
        {icon && (
          <div className={styles['StatusView--iconButton']}>
            <div style={{ display: 'flex' }}>
              <div className={styles['StatusView--iconButton-text-label']}>{icon.label}</div>
              <Tooltip showEvent='hover' text={icon.tooltipText}>
                <span onClick={icon.onIconClick} style={{ cursor: 'pointer' }}>
                  {icon.value}
                </span>
              </Tooltip>
            </div>
          </div>
        )}
        {!icon &&
          actions?.map((action, idx) => {
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
