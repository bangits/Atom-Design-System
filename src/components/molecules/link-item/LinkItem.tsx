import { CopyButton } from '@/components/atoms/copy-button';
import { FC } from 'react';
import styles from './LinkItem.module.scss';

export interface LinkItemProps {
  index?: string;
  linkHref?: string;
  imgSrc?: string;
}

const LinkItem: FC<LinkItemProps> = ({ imgSrc, index, linkHref }) => {
  return (
    <div className={styles.LinkItem}>
      {index && <span className={styles['LinkItem__index']}>{index}</span>}

      <div className={styles['LinkItem__content']}>
        {imgSrc && <img src={imgSrc} />}

        {linkHref && (
          <>
            <p>{linkHref}</p>

            <CopyButton copyText={linkHref} />
          </>
        )}
      </div>
    </div>
  );
};

export default LinkItem;
