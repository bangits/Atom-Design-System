import { Icons } from '@/atom-design-system';
import { Tooltip } from '@my-ui/core';
import { FC } from 'react';
import styles from './InfoTooltip.module.scss';

export const InfoTooltip: FC<{ infoTooltipText?: string; isQuestion?: boolean }> = ({
  infoTooltipText,
  isQuestion
}) => {
  return (
    <Tooltip showEvent='hover' text={infoTooltipText} disabled={!infoTooltipText}>
      <div className={styles.InfoIcon}>{isQuestion ? <Icons.QuestionIcon /> : <Icons.InfoTooltipIcon />}</div>
    </Tooltip>
  );
};
