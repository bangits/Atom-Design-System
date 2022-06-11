import { AvatarCard, Card } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './UserView.module.scss';

export interface UserViewProps {
  userInfo: {
    avatar?: {
      imageSrc: string;
      status: 'online' | 'offline';
    };
    title?: string;
    id?: string | number;
    // userName: string;
    // regInfo: string;
  };
}

const UserView: FC<UserViewProps> = ({ userInfo }) => {
  return (
    <Card borderRadius={1.6} className={classNames(styles.UserView, styles['UserView--user'])}>
      <div className={classNames(styles['UserView--user-detailsContainer'])}>
        <div className={classNames(styles['UserView--user-avatarContainer'])}>
          <AvatarCard
            avatarImg='https://cdn.celebsagewiki.com/images/22/tatul-avoyan.jpg'
            imageSize='sm'
            variant='online'
          />
        </div>
        <div className={classNames(styles['UserView--user-details'])}>
          <span>{userInfo.title}</span>
          <span>{userInfo.id}</span>
        </div>
      </div>
      <div className={classNames(styles['UserView--user-info'])}>
        {/* <span>{userInfo.regInfo}</span> */}
        {/* <span>{userInfo.userName}</span> */}
      </div>
    </Card>
  );
};

export default UserView;
