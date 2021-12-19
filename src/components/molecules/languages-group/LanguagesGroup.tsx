import { Tag, TagProps } from '@my-ui/core';
import React, { FC } from 'react';
import styles from './LanguagesGroup.module.scss';

export interface LanguagesGroupProps {
  tags: TagProps[];
}

const TagsGroup: FC<LanguagesGroupProps> = ({ tags }) => {
  return (
    <div className={styles.LanguagesGroupWrapper}>
      {tags && tags.map((tag, idx) => <Tag {...tag} inactive key={idx} className={styles.Languages} />)}
    </div>
  );
};

export default TagsGroup;
