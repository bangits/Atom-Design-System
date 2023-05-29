import { MainContext } from '@/contexts';
import { Button } from '@my-ui/core';
import classNames from 'classnames';
import { FC, useContext, useEffect, useRef, useState } from 'react';
import styles from './ListViewMore.module.scss';

const ListViewMore: FC = ({ children }) => {
  const { getViewMoreLabel, viewLessLabel } = useContext(MainContext);

  const listRef = useRef<HTMLInputElement>(null);

  const [showMoreBtn, setShowMoreBtn] = useState(false);

  const [isViewMoreButtonClicked, setIsViewMoreButtonClicked] = useState(false);
  const [remaindChildsCount, setRemaindChildsCount] = useState(0);

  useEffect(() => {
    const listElementWidth = listRef.current.clientWidth;

    // Getting css gap style and convert to number
    const listGap = +getComputedStyle(listRef.current).gap.split('px')[0];

    let elementsTotalWidth = 0;

    let visibleChildsCount = 0;

    const childrenList = listRef.current.children;

    // Using for, because we need break
    for (let i = 0; i < childrenList.length; i++) {
      const child = childrenList[i];

      elementsTotalWidth += child.clientWidth + listGap;

      if (elementsTotalWidth > listElementWidth) {
        // i counting from 0, for that don't need to subtract 1
        visibleChildsCount = i;

        break;
      }
    }

    setRemaindChildsCount(childrenList.length - visibleChildsCount);

    if (listRef.current.clientHeight !== listRef.current.scrollHeight) setShowMoreBtn(true);
  }, []);

  return (
    <div
      className={classNames(styles.ListViewMore, {
        [styles['ListViewMore--ViewMoreClicked']]: isViewMoreButtonClicked
      })}>
      <div className={styles.ListViewMore__List} ref={listRef}>
        {children}
      </div>

      {showMoreBtn && (
        <Button
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
