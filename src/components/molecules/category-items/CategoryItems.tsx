import { EmptyForm, Icons } from '@/atom-design-system';
import { Button, ButtonProps, Card, Loader, Scroll, ScrollProps, Tooltip, Typography } from '@my-ui/core';
import classNames from 'classnames';
import { Children, FC, PropsWithChildren, ReactNode, useMemo, useRef } from 'react';
import styles from './CategoryItems.module.scss';

export interface CategoryItemsProps {
  title?: ReactNode;
  cardTopPart?: ReactNode;
  buttonProps?: ButtonProps;
  isFilter?: boolean;
  isAllItemsLoaded?: boolean;
  isLoadingItems?: boolean;
  pagination?: ReactNode;
  buttons?: ReactNode[];
  isFilterOpened?: boolean;
  itemsWidthAuto?: boolean;
  scrollProps?: ScrollProps;
  fixHeight?: boolean;
  emptyMsg?: ReactNode;
  buttonTooltip?: string;

  onPageChange?(page: number): void;
}

const CategoryItems: FC<PropsWithChildren<CategoryItemsProps>> = ({
  children,
  isFilter,
  buttonProps,
  onPageChange,
  isAllItemsLoaded,
  isLoadingItems,
  pagination,
  buttons,
  isFilterOpened,
  title,
  cardTopPart,
  itemsWidthAuto,
  scrollProps = {
    autoHeight: false,
    height: '100%'
  },
  fixHeight = true,
  buttonTooltip,
  emptyMsg
}) => {
  const currentPageRef = useRef(1);

  const childrenArray = useMemo(() => Children.toArray(children), [children]);

  return (
    <div
      className={classNames(styles.CategoryItems, {
        [styles['CategoryItems--filter']]: isFilter,
        [styles['CategoryItems--fix-height']]: fixHeight,
        [styles['CategoryItems--results']]: !isFilter,
        [styles['CategoryItems--filter-opened']]: isFilterOpened
      })}>
      {(buttonProps || title) && (
        <div
          className={classNames(styles['CategoryItems__top-part'], {
            [styles['CategoryItems__top-part--only-button']]: !title
          })}>
          {title && (
            <Typography variant='p4' className={styles['CategoryItems__title']}>
              {title}
            </Typography>
          )}

          {buttonProps && (
            <Tooltip disabled={!buttonTooltip} text={buttonTooltip}>
              <div>
                <Button
                  className={classNames(styles['CategoryItems__button'], {
                    [styles['CategoryItems__button--disabled']]: buttonProps.disabled
                  })}
                  variant='link'
                  startIcon={<Icons.PlusCircleLarge />}
                  {...buttonProps}
                />
              </div>
            </Tooltip>
          )}
        </div>
      )}

      <Card className={styles['CategoryItems__card']}>
        {cardTopPart}

        {!emptyMsg || isLoadingItems ? (
          <Scroll
            {...scrollProps}
            className={styles['CategoryItems__scroll']}
            showHorizontalScroll={false}
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
                <div
                  className={classNames(styles['CategoryItems__item'], {
                    [styles['CategoryItems__item--width-auto']]: itemsWidthAuto
                  })}>
                  {c}
                </div>
              ))}
              {isLoadingItems && (
                <div className={styles['CategoryItems__loader']}>
                  <Loader />
                </div>
              )}
            </div>
          </Scroll>
        ) : (
          <EmptyForm imgContentSize='lg' removeCard>
            {emptyMsg}
          </EmptyForm>
        )}

        {buttons?.length && <div className={styles['CategoryItems__buttons']}>{buttons}</div>}

        {pagination && <div className={styles['CategoryItems__pagination']}>{pagination}</div>}
      </Card>
    </div>
  );
};

export default CategoryItems;
