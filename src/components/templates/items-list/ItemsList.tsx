import { ScrollableView, ScrollableViewProps, typedMemo } from '@/atom-design-system';
import { FC } from 'react';
import styles from './ItemsList.module.scss';

export interface ItemsListProps {
  scrollableViewProps: ScrollableViewProps;
}

const ItemsList: FC<ItemsListProps> = ({ children, scrollableViewProps }) => {
  return (
    <ScrollableView height='min(50vh, 50rem)' {...scrollableViewProps}>
      <div data-scroll-container className={styles.ItemsList}>
        {children}
      </div>
    </ScrollableView>
  );
};

export default typedMemo(ItemsList);
