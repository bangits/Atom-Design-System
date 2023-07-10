import { Icons, Tooltip } from '@/atom-design-system';
import styles from './LabelManagerTag.module.scss';
import classNames from 'classnames';

interface LabelManagerTagLiteProps {
  isActive: boolean;
  tooltipText: string;
}

export const LabelManagerTagLite = ({ isActive, tooltipText }: LabelManagerTagLiteProps) => {
  return (
    <div className={styles.Container}>
      <Tooltip text={tooltipText}>
        <div className={styles['Lite-LabelIconWrapper']}>
          <Icons.Label
            className={classNames(styles['Lite-LabelIcon'], {
              [styles['Lite-LabelIcon--active']]: isActive
            })}
          />
        </div>
      </Tooltip>
    </div>
  );
};
