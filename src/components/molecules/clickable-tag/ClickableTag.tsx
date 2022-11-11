import { Tag, TagProps } from '@my-ui/core';
import { ComponentType } from '@my-ui/core/dist/types';
import { FC } from 'react';
import styles from './ClickableTag.module.scss';

export interface ClickableTagProps extends TagProps {
  component?: ComponentType;
}

const ClickableTag: FC<ClickableTagProps> = ({ component: Component = 'a', ...props }) => {
  return (
    <Component className={styles.ClickableTag}>
      <Tag {...props} className={styles['ClickableTag__tag']} />
    </Component>
  );
};

export default ClickableTag;
