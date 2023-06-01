import { MainContext } from '@/contexts';
import { Button } from '@my-ui/core';
import classNames from 'classnames';
import { FC, useContext, useEffect, useRef, useState } from 'react';
import styles from './ListViewMore.module.scss';

const ListViewMore: FC = ({ children }) => {
  const { getViewMoreLabel, viewLessLabel } = useContext(MainContext);

  const listRef = useRef<HTMLInputElement>(null);

  const [showMoreBtn, setShowMoreBtn] = useState(false);
  const [scrollHeight, setScrollHeight] = useState<number | null>(null);

  const [isViewMoreButtonClicked, setIsViewMoreButtonClicked] = useState(false);
  const [remaindChildsCount, setRemaindChildsCount] = useState(0);

  useEffect(() => {
    // Getting css gap style and convert to number
    const listGap = +getComputedStyle(listRef.current).gap.split('px')[0];

    const listElementWidth = Math.ceil(listRef.current.clientWidth + listGap);

    let elementsTotalWidth = 0;

    let visibleChildsCount = 0;

    const childrenList = listRef.current.children;

    // Using for, because we need break
    for (let i = 0; i < childrenList.length; i++) {
      const child = childrenList[i];

      elementsTotalWidth += Math.floor(child.clientWidth + listGap);

      if (elementsTotalWidth > listElementWidth) {
        // i counting from 0, for that don't need to subtract 1
        visibleChildsCount = i;

        break;
      }
    }

    setRemaindChildsCount(childrenList.length - visibleChildsCount);

    setShowMoreBtn(listRef.current.clientHeight !== listRef.current.scrollHeight);

    if (listRef.current.clientHeight !== listRef.current.scrollHeight) setScrollHeight(listRef.current.scrollHeight);
  }, [children]);

  return (
    <div
      className={classNames(styles.ListViewMore, {
        [styles['ListViewMore--ViewMoreClicked']]: isViewMoreButtonClicked
      })}>
      <div
        style={{ maxHeight: isViewMoreButtonClicked && scrollHeight }}
        className={styles.ListViewMore__List}
        ref={listRef}>
        {children}
      </div>

      {showMoreBtn && (
        <Button
          type='button'
          className={styles.ListViewMore__Btn}
          variant='link'
          onClick={() => setIsViewMoreButtonClicked(!isViewMoreButtonClicked)}>
          {!isViewMoreButtonClicked ? `${getViewMoreLabel(remaindChildsCount)}` : viewLessLabel}
        </Button>
      )}
    </div>
  );
};

export default ListViewMore;
