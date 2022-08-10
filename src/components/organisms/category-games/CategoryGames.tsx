import { CheckboxWithLabel, CheckboxWithLabelProps, Icons } from '@/atom-design-system';
import { Button, ButtonProps, Card, Loader, Scroll } from '@my-ui/core';
import classNames from 'classnames';
import { Children, FC, PropsWithChildren, ReactNode, useMemo, useRef } from 'react';
import styles from './CategoryGames.module.scss';

export interface CategoryGamesProps {
  buttonProps?: ButtonProps;
  checkboxWithLabelProps?: CheckboxWithLabelProps;
  isFilter?: boolean;
  isAllGamesLoaded?: boolean;
  isLoadingGames?: boolean;
  pagination?: ReactNode;
  buttons?: ReactNode[];
  isFilterOpened?: boolean;

  onPageChange?(page: number): void;
}

const CategoryGames: FC<PropsWithChildren<CategoryGamesProps>> = ({
  children,
  isFilter,
  buttonProps,
  checkboxWithLabelProps,
  onPageChange,
  isAllGamesLoaded,
  isLoadingGames,
  pagination,
  buttons,
  isFilterOpened
}) => {
  const currentPageRef = useRef(1);

  const childrenArray = useMemo(() => Children.toArray(children), [children]);

  return (
    <>
      {checkboxWithLabelProps && <CheckboxWithLabel className={styles.CheckboxWithLabel} {...checkboxWithLabelProps} />}

      <div
        className={classNames(styles.CategoryGames, {
          [styles['CategoryGames--filter']]: isFilter,
          [styles['CategoryGames--results']]: !isFilter,
          [styles['CategoryGames--filter-opened']]: isFilterOpened
        })}>
        {buttonProps && (
          <Button
            className={styles['CategoryGames__button']}
            variant='link'
            startIcon={<Icons.PlusCircleLarge />}
            {...buttonProps}
          />
        )}

        <Card className={styles['CategoryGames__card']}>
          <Scroll
            autoHeight={false}
            height='100%'
            onScroll={(e) => {
              if (isAllGamesLoaded || isLoadingGames) return;

              const isScrolledToBottom =
                (e.target as HTMLDivElement).offsetHeight + (e.target as HTMLDivElement).scrollTop >=
                (e.target as HTMLDivElement).scrollHeight;

              if (isScrolledToBottom) {
                onPageChange?.(currentPageRef.current + 1);

                currentPageRef.current = currentPageRef.current + 1;
              }
            }}>
            <div className={styles['CategoryGames__list']}>
              {childrenArray.map((c) => (
                <div className={styles['CategoryGames__item']}>{c}</div>
              ))}
              {isLoadingGames && (
                <div className={styles['CategoryGames__loader']}>
                  <Loader />
                </div>
              )}
            </div>
          </Scroll>

          {buttons?.length && <div className={styles['CategoryGames__buttons']}>{buttons}</div>}

          {pagination && <div className={styles['CategoryGames__pagination']}>{pagination}</div>}
        </Card>
      </div>
    </>
  );
};

export default CategoryGames;
