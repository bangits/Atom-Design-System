import { Loader, Scroll } from '@my-ui/core';
import classNames from 'classnames';
import { CSSProperties, FC, PropsWithChildren, useState } from 'react';
import styles from './ScrollableView.module.scss';

export interface ScrollableViewProps {
  disableOnPageChange: boolean;
  showLoader?: boolean;
  className?: string;

  height?: CSSProperties['height'];

  onPageChange(newPage: number): void;
}

const ScrollableView: FC<PropsWithChildren<ScrollableViewProps>> = ({
  disableOnPageChange,
  onPageChange,
  className,
  showLoader,
  height,
  children
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <Scroll
      height={height || '60rem'}
      autoHide
      onScroll={(e) => {
        if (disableOnPageChange) return;

        const isScrolledToBottom =
          (e.target as HTMLDivElement).offsetHeight + (e.target as HTMLDivElement).scrollTop >=
          (e.target as HTMLDivElement).scrollHeight;

        if (isScrolledToBottom) {
          onPageChange(currentPage + 1);
          setCurrentPage(currentPage + 1);
        }
      }}
      className={classNames(styles.ScrollableView, className)}>
      {children}

      <div className={styles.LoaderContainer}>{showLoader && <Loader />}</div>
    </Scroll>
  );
};

export default ScrollableView;
