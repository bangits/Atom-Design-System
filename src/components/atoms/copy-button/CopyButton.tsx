import { Icons } from '@/atom-design-system';
import { copyToClipboard } from '@/helpers';
import { Tooltip } from '@my-ui/core';
import { FC } from 'react';
import styles from './CopyButton.module.scss';

export const CopyButton: FC<{ copyText: string | number }> = ({ children, copyText }) => {
  return (
    <Tooltip showEvent='click' text='Copied'>
      <button type='button' className={styles.CopyButton}>
        <span
          onClick={() => {
            copyToClipboard(copyText.toString());
          }}>
          <Icons.CopyIcon />
        </span>
      </button>
    </Tooltip>
  );
};
