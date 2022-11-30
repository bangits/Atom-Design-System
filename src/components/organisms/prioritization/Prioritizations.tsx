import { CategoryItemsProps, ListViewMoreProps, SearchInputProps } from '@/atom-design-system';
import { EmptyForm, TextInput } from '@/components';
import { Card, Loader, Scroll, Tab } from '@my-ui/core';
import classNames from 'classnames';
import { Children, FC, ReactNode, useMemo, useRef, useState } from 'react';
import styles from './Prioritizations.module.scss';

export interface PrioritizationsProps extends CategoryItemsProps {
  lessLabel: string;
  getMoreLabel: ListViewMoreProps['getMoreLabel'];
  searchInputProps?: SearchInputProps;
  options: { value: number; title: string }[];
  hasTasks: boolean;
  isTabLoading: boolean;
  searchLabel: string;
  searchInputMaxLength: number;
  buttons?: ReactNode[];
  isAllItemsLoaded?: boolean;
  isLoadingItems?: boolean;
  itemsWidthAuto?: boolean;
  pagination?: ReactNode;
  emptyFormText?: string;
  defaultTabValue?: number;
  onPageChange?(page: number): void;
  tabOnChange?(taskTypeId: number): void;
  onChange(search: string): void;
}

const Prioritizations: FC<PrioritizationsProps> = ({
  children,
  lessLabel,
  searchInputProps,
  getMoreLabel,
  options,
  hasTasks,
  isTabLoading,
  searchLabel,
  onChange,
  searchInputMaxLength,
  isAllItemsLoaded,
  isLoadingItems,
  onPageChange,
  buttons,
  itemsWidthAuto,
  pagination,
  emptyFormText,
  tabOnChange,
  defaultTabValue,
  ...categoryItemsProps
}) => {
  const latestSearchValue = useRef('');
  const [searchValue, setSearchValue] = useState('');

  const [currentPage, setCurrentPage] = useState<number>(1);

  const childrenArray = useMemo(() => Children.toArray(children), [children]);

  const scrollProps = useMemo<CategoryItemsProps['scrollProps']>(
    () => ({
      autoHide: true,
      autoHeightMin: '50rem',
      height: '50rem'
    }),
    []
  );

  const currentPageRef = useRef(1);

  return (
    <>
      <Card className={styles['CategoryItems__card']}>
        <div className='mb-2'>
          <Scroll showHorizontalScroll onScroll={(e) => console.log('onScroll')}>
            <Tab
              options={options || []}
              defaultValue={defaultTabValue}
              variant='bordered'
              onChange={(e) => tabOnChange(e)}
            />
          </Scroll>
        </div>

        {!isTabLoading ? (
          <TextInput
            label={searchLabel}
            endIcon={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16px'
                style={{ fill: '#8ea6c1', cursor: 'pointer', opacity: '0.5' }}
                viewBox='0 0 512 512'
                onClick={() => {
                  if (!(latestSearchValue.current && !searchValue.length) && searchValue.length < 3) return;

                  latestSearchValue.current = searchValue;

                  setCurrentPage(1);

                  onChange(searchValue);
                }}>
                <path d='m503.6 463.2-96.7-96.4C438.1 327.1 455 278 455 227.5 455 101.8 353.1 0 227.5 0 101.8 0 0 101.8 0 227.5 0 353.1 101.8 455 227.5 455c50.5.1 99.6-16.9 139.3-48.1l96.4 96.7c11.1 11.1 29.1 11.2 40.2.2l.2-.2c11.1-11.1 11.2-29.1.2-40.2l-.2-.2zM56.9 227.5c0-94.2 76.4-170.6 170.6-170.6 94.2 0 170.6 76.4 170.6 170.6 0 94.2-76.4 170.6-170.6 170.6-94.3 0-170.6-76.4-170.6-170.6z' />
              </svg>
            }
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            maxLength={searchInputMaxLength}
          />
        ) : null}
        {/* {cardTopPart} */}

        <Scroll
          {...scrollProps}
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
            {childrenArray.length ? (
              childrenArray.map((c) => (
                <div
                  className={classNames(styles['CategoryItems__item'], {
                    [styles['CategoryItems__item--width-auto']]: itemsWidthAuto
                  })}>
                  {c}
                </div>
              ))
            ) : (
              <EmptyForm>{emptyFormText}</EmptyForm>
            )}
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
    </>
  );
};

export default Prioritizations;
