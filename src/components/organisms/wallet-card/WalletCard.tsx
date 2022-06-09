import { StatusProps, Typography } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC, useRef } from 'react';
import styles from './WalletCard.module.scss';

export interface WalletCardProps extends StatusProps {
  col: number;
  noDataText: string;
  walletType: string | number;
  balance: {
    label: string;
    value: string | number;
  };
  account: {
    label: string;
    id: string | number;
  };
}

const WalletCard: FC<WalletCardProps> = ({ walletType, col = 4, noDataText, account, balance }) => {
  const containerRef = useRef<HTMLDivElement>();

  return (
    <div>
      <div
        ref={containerRef}
        className={classNames(styles.WalletCardWrapper, {
          [styles[`WalletCardWrapper--${col}`]]: col
        })}>
        <div className={styles.CardHeader}>
          <div style={{ display: 'flex' }}>
            <div className={styles.MainContent}>
              <Typography className={styles.ContentType} variant='p4'>
                {walletType || noDataText}
              </Typography>
              <Typography className={styles.Label} variant='p4'>
                {balance.label}: <span>{balance.value || noDataText}</span>
              </Typography>
              <Typography className={styles.Label} variant='p4'>
                {account.label}: <span>{account.id || noDataText}</span>
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
