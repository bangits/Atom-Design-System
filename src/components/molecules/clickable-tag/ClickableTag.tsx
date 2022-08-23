import { Tag, TagProps } from '@my-ui/core';
import { FC, ReactNode } from 'react';
import styles from './ClickableTag.module.scss';

export interface ClickableTagProps extends TagProps {
  component?: ({ className: string, children: ReactNode }) => ReactNode;
}

const ClickableTag: FC<ClickableTagProps> = ({ component: Component = 'a', ...props }) => {
  return (
    <Component className={styles.ClickableTag}>
      <Tag {...props} className={styles['ClickableTag__tag']} />
    </Component>
  );
};

export default ClickableTag;
