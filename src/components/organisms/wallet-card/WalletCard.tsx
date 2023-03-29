import React from 'react';
import { StatusProps, Typography, Icons } from '@my-ui/core';
import classNames from 'classnames';
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
  action?: {
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    label: string;
    onAction: (card: WalletCardProps) => void;
  };
}

const WalletCard = ({ cards }: { cards: WalletCardProps[] }) => {
  return (
    <div className='d-flex gap-2'>
      {cards &&
        cards.map((card) => {
          return (
            <div
              className={classNames(styles.WalletCardWrapper, {
                [styles[`WalletCardWrapper--${card.col}`]]: card.col
              })}>
              <div className={styles.CardHeader}>
                <div className={styles.MainContent}>
                  <div className={styles.FirstRow}>
                    <Typography className={styles.ContentType} variant='p4'>
                      {card.walletType || card.noDataText}
                    </Typography>
                    {card.action && (
                      <div onClick={() => card.action.onAction(card)} className={styles.Action}>
                        {card.action.icon ? (
                          <card.action.icon className={styles.ActionButton} width='1.4em' height='1.4em' />
                        ) : (
                          <Icons.SettingIcon className={styles.ActionButton} width='1.4em' height='1.4em' />
                        )}
                        <Typography className={styles.ActionLabel} color='primary' variant='p4'>
                          {card.action.label}
                        </Typography>
                      </div>
                    )}
                  </div>

                  <Typography className={styles.Label} variant='p4'>
                    {card.balance.label}: <span>{card.balance.value || 0}</span>
                  </Typography>
                  <Typography className={styles.Label} variant='p4'>
                    {card.account.label}: <span>{card.account.id || card.noDataText}</span>
                  </Typography>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default WalletCard;
