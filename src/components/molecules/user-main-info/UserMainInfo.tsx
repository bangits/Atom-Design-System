import { UserMainIcon } from '@/icons';
import React from 'react';
import styles from './UserMainInfo.module.scss';

const UserMainInfo = ({ className }) => {
  return (
    <div className={className}>
      <UserMainIcon />
    </div>
  );
};
export default UserMainInfo;
