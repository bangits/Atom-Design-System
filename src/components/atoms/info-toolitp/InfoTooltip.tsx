import { Icons } from '@/atom-design-system';
import { Tooltip } from '@my-ui/core';
import { FC } from 'react';
import styles from './InfoTooltip.module.scss';

export const InfoTooltip: FC<{ infoTooltipText?: string }> = ({ infoTooltipText }) => {
  return (
    <Tooltip showEvent='hover' text={infoTooltipText} disabled={!infoTooltipText}>
      <div className={styles.InfoIcon}>
        <Icons.InfoIcon />
      </div>
    </Tooltip>
  );
};
