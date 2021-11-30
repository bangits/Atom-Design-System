import { StatusProps } from '@my-ui/core';
import React from 'react';
export interface StatusInfo extends StatusProps {
    label: string;
    statusLabel: string;
}
export interface PlayerDetailsProps {
    userInfo: {
        avatar?: {
            imageSrc: string;
            status: 'online' | 'offline';
        };
        title: string;
        id: string | number;
        userName: string;
        regInfo: string;
    };
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
    statusInfo: StatusInfo;
    lastActivity: {
        title: string;
        info: {
            label: string;
            date: string | number;
        }[];
    };
}
declare const _default: React.FC<PlayerDetailsProps>;
export default _default;
