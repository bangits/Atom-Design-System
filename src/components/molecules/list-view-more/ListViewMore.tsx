import { MainContext } from '@/contexts';
import { Button } from '@my-ui/core';
import { FC, useContext, useMemo, useRef, useState } from 'react';
import styles from './ListViewMore.module.scss';

export interface ListViewMoreProps {
  rowHeight?: number;
  scrollRowCount?: number;
  gap?: number;
}

const ListViewMore: FC<ListViewMoreProps> = ({ children, rowHeight = 3.2, scrollRowCount = 2, gap = 0.8 }) => {
  const { getViewMoreLabel, viewLessLabel } = useContext(MainContext);

  const listRef = useRef<HTMLInputElement>(null);

  const [currentRow, setCurrentRow] = useState(1);

  const nextRowElementsCount = useMemo(() => {
    if (!listRef.current) return;

    const remSize = +getComputedStyle(document.querySelector('html')).fontSize.split('px')[0];

    const listGap = gap * remSize;

    const listGaps = listGap * (currentRow - 1);

    const singleRowHeight = remSize * rowHeight;

    const maxHeightWithoutGaps = remSize * currentRow * rowHeight;

    const maxHeight = maxHeightWithoutGaps + listGaps;

    const nextMaxHeight = Math.round(maxHeight + singleRowHeight * scrollRowCount + listGap * scrollRowCount);

    const lastRowY = Math.round(listRef.current.getBoundingClientRect().y + maxHeight);

    const nextRowY = Math.round(lastRowY + (nextMaxHeight - maxHeight - singleRowHeight));

    let nextRowCount = 0;

    for (const child of listRef.current.children) {
      const childY = Math.round(child.getBoundingClientRect().y);

      if (childY > nextRowY) break;

      if (childY >= lastRowY) nextRowCount++;
    }

    return nextRowCount;
  }, [children, currentRow, scrollRowCount, gap, rowHeight, listRef.current]);

  return (
    <div className={styles.ListViewMore}>
      <div
        style={{ maxHeight: `${currentRow * rowHeight + (currentRow - 1) * gap}rem`, gap: `${gap}rem` }}
        className={styles.ListViewMore__List}
        ref={listRef}>
        {children}
      </div>

      <div className={styles.ListViewMore__Btns}>
        {nextRowElementsCount > 0 && (
          <Button
            type='button'
            className={styles.ListViewMore__Btn}
            variant='link'
            onClick={() => setCurrentRow((prev) => prev + scrollRowCount)}>
            {getViewMoreLabel(nextRowElementsCount)}
          </Button>
        )}

        {currentRow > 1 && (
          <Button type='button' className={styles.ListViewMore__Btn} variant='link' onClick={() => setCurrentRow(1)}>
            {viewLessLabel}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ListViewMore;
