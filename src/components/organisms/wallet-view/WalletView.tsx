import { Card } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './WalletView.module.scss';

export interface WalletViewProps {
  walletInfo: {
    title: string;
    realBalance: {
      label: string;
      balance: number | string;
      subBalance: {
        label: string;
        balance: number | string;
      }[];
    };
    bonusBalance: {
      label: string;
      balance: number | string;
    };
    totalBalance: {
      label: string;
      balance: number | string;
    };
  };
}

const WalletView: FC<WalletViewProps> = ({ walletInfo }) => {
  return (
    <Card borderRadius={1.6} className={classNames(styles.WalletView)}>
      <div className={classNames(styles['WalletView--title'])}>{walletInfo.title}</div>
      <div className={classNames(styles['WalletView--realBalance'])}>
        <div>
          <span>{walletInfo.realBalance.label}</span> <span>{walletInfo.realBalance.balance}</span>
        </div>
        <ul>
          {walletInfo.realBalance.subBalance.map((sub) => (
            <li key={sub.label}>
              <span>{sub.label}</span>
              <span>{sub.balance}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={classNames(styles['WalletView--bonusBalance'])}>
        <span>{walletInfo.bonusBalance.label}</span>
        <span>{walletInfo.bonusBalance.balance}</span>
      </div>
      <div className={classNames(styles['WalletView--totalBalance'])}>
        <span>{walletInfo.totalBalance.label}</span>
        <span>{walletInfo.totalBalance.balance}</span>
      </div>
    </Card>
  );
};

export default WalletView;
