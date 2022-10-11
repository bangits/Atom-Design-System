import { CheckboxWithLabel, CheckboxWithLabelProps, Icons } from '@/atom-design-system';
import { Button, ButtonProps, Card, Loader, Scroll } from '@my-ui/core';
import classNames from 'classnames';
import { Children, FC, PropsWithChildren, ReactNode, useMemo, useRef } from 'react';
import styles from './CategoryItems.module.scss';

export interface CategoryItemsProps {
  buttonProps?: ButtonProps;
  checkboxWithLabelProps?: CheckboxWithLabelProps;
  isFilter?: boolean;
  isAllItemsLoaded?: boolean;
  isLoadingItems?: boolean;
  pagination?: ReactNode;
  buttons?: ReactNode[];
  isFilterOpened?: boolean;

  onPageChange?(page: number): void;
}

const CategoryItems: FC<PropsWithChildren<CategoryItemsProps>> = ({
  children,
  isFilter,
  buttonProps,
  checkboxWithLabelProps,
  onPageChange,
  isAllItemsLoaded,
  isLoadingItems,
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
        className={classNames(styles.CategoryItems, {
          [styles['CategoryItems--filter']]: isFilter,
          [styles['CategoryItems--results']]: !isFilter,
          [styles['CategoryItems--filter-opened']]: isFilterOpened
        })}>
        {buttonProps && (
          <Button
            className={styles['CategoryItems__button']}
            variant='link'
            startIcon={<Icons.PlusCircleLarge />}
            {...buttonProps}
          />
        )}

        <Card className={styles['CategoryItems__card']}>
          <Scroll
            autoHeight={false}
            height='100%'
            onScroll={(e) => {
              if (isAllItemsLoaded || isLoadingItems) return;

              const isScrolledToBottom =
                (e.target as HTMLDivElement).offsetHeight + (e.target as HTMLDivElement).scrollTop >=
                (e.target as HTMLDivElement).scrollHeight;

              if (isScrolledToBottom) {
                onPageChange?.(currentPageRef.current + 1);

                currentPageRef.current = currentPageRef.current + 1;
              }
            }}>
            <div className={styles['CategoryItems__list']}>
              {childrenArray.map((c) => (
                <div className={styles['CategoryItems__item']}>{c}</div>
              ))}
              {isLoadingItems && (
                <div className={styles['CategoryItems__loader']}>
                  <Loader />
                </div>
              )}
            </div>
          </Scroll>

          {buttons?.length && <div className={styles['CategoryItems__buttons']}>{buttons}</div>}

          {pagination && <div className={styles['CategoryItems__pagination']}>{pagination}</div>}
        </Card>
      </div>
    </>
  );
};

export default CategoryItems;
