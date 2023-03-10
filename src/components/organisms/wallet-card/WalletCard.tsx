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


const WalletCard = ({ cards }: { cards: WalletCardProps[] }) => {

  return (
    <div className='d-flex gap-2'>
      {cards && cards.map((card) => {
        return <div
          className={classNames(styles.WalletCardWrapper, {
            [styles[`WalletCardWrapper--${card.col}`]]: card.col
          })}>
          <div className={styles.CardHeader}>
            <div style={{ display: 'flex' }}>
              <div className={styles.MainContent}>
                <Typography className={styles.ContentType} variant='p4'>
                  {card.walletType || card.noDataText}
                </Typography>
                <Typography className={styles.Label} variant='p4'>
                  {card.balance.label}: <span>{card.balance.value || 0}</span>
                </Typography>
                <Typography className={styles.Label} variant='p4'>
                  {card.account.label}: <span>{card.account.id || card.noDataText}</span>
                </Typography>
              </div>
            </div>
          </div>
        </div>
      })}

    </div>
  );
};

export default WalletCard;
