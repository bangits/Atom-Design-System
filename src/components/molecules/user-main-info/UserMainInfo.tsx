import { UserMainIcon } from '@/icons';
import React from 'react';

const UserMainInfo = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <UserMainIcon width='4rem' />
    </div>
  );
};
export default UserMainInfo;
