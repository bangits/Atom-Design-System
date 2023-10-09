import { Icons, Typography } from '@/atom-design-system';
import { ComponentType } from '@my-ui/core/dist/types';
import classNames from 'classnames';
import { CSSProperties, FC, ReactNode, useCallback, useLayoutEffect, useRef, useState } from 'react';
import styles from './Card.module.scss';

export interface CardProps {
  component?: ComponentType;

  actions?: ReactNode;

  height?: CSSProperties['height'];

  index?: number;
}

const Card: FC<CardProps> = ({ component: Component = 'div', actions, height = '14.5rem', children, index }) => {
  const [openViewMoreCollapse, setOpenViewMoreCollapse] = useState(false);
  const [showViewMoreBtnRef, setShowViewMoreBtnRef] = useState(false);

  const cardContentElRef = useRef<HTMLDivElement | null>(null);

  const toggleViewMoreCollapse = useCallback(() => setOpenViewMoreCollapse((prev) => !prev), [setOpenViewMoreCollapse]);

  useLayoutEffect(() => {
    setShowViewMoreBtnRef(
      cardContentElRef.current && cardContentElRef.current.scrollHeight > cardContentElRef.current.offsetHeight
    );
  }, [children]);

  return (
    <Component
      className={classNames(styles.Card, {
        [styles['Card--WithActions']]: actions,
        [styles['Card--CollapseOpened']]: openViewMoreCollapse,
        [styles['Card--WithCollapse']]: showViewMoreBtnRef
      })}>
      {index && (
        <Typography variant='p4' className={styles.Card__Index}>
          {index}
        </Typography>
      )}
      <div className={styles.Card__Wrapper}>
        <div
          className={styles.Card__Content}
          ref={cardContentElRef}
          style={{ height: openViewMoreCollapse ? cardContentElRef.current?.scrollHeight : height }}>
          {children}
        </div>

        <div className={styles.Card__Actions}>{actions}</div>

        {showViewMoreBtnRef && (
          <button className={styles.Card__Btn} type='button' onClick={toggleViewMoreCollapse}>
            {openViewMoreCollapse ? 'View Less' : 'View More'}

            <Icons.ViewMoreArrowIcon />
          </button>
        )}
      </div>
    </Component>
  );
};

export default Card;
