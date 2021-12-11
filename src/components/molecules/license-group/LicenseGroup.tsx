import React, { FC } from 'react';
import { Tag, TagProps } from '@my-ui/core';
import styles from './LicenseGroup.module.scss';

export interface LicenseGroupProps {
  tags: TagProps[];
}

const TagsGroup: FC<LicenseGroupProps> = ({ tags }) => {
  return (
    <div className={styles.LicenseGroupWrapper}>
      {tags && tags.map((tag, idx) => <Tag {...tag} key={idx} className={styles.License} />)}
    </div>
  );
};

export default TagsGroup;
