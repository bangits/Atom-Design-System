import { CategoryItems, CategoryItemsProps, DividerList, SearchInputProps } from '@/atom-design-system';
import { FC, ReactNode, useMemo } from 'react';
import styles from './EligableGames.module.scss';

export interface EligableGamesProps extends CategoryItemsProps {
  lessLabel: string;
  searchInputProps?: SearchInputProps;

  providers: {
    name: string;
    selected: boolean;
  }[];

  categories: {
    name: string;
    selected: boolean;
  }[];

  bulkActions?: ReactNode;
}

const EligableGames: FC<EligableGamesProps> = ({
  categories,
  providers,
  lessLabel,
  searchInputProps,
  bulkActions,
  ...categoryItemsProps
}) => {
  const cardTopPart = useMemo(
    () => (
      <>
        {/* <Scroll className={styles.EligableGames__Filters} autoHide height='15rem' autoHeightMin='15rem'>
          <ListViewMore lessLabel={lessLabel} getMoreLabel={getMoreLabel}>
            {providers.map((p) => (
              <Tag
                title={p.name}
                color='primary'
                className={classNames(styles.EligableGames__ProviderTag, {
                  [styles['EligableGames__ProviderTag--Selected']]: p.selected
                })}
              />
            ))}
          </ListViewMore>
          <ListViewMore lessLabel={lessLabel} getMoreLabel={getMoreLabel}>
            {categories.map((c) => (
              <Tag
                title={c.name}
                className={classNames(styles.EligableGames__GameTypeTag, {
                  [styles['EligableGames__GameTypeTag--Selected']]: c.selected
                })}
              />
            ))}
          </ListViewMore>
          {searchInputProps && (
            <SearchInput
              {...searchInputProps}
              containerClassName={classNames(styles.EligableGames__SearchInput, searchInputProps.containerClassName)}
            />
          )}
        </Scroll> */}

        {bulkActions && <DividerList className={styles.EligableGames__BulkActions}>{bulkActions}</DividerList>}
      </>
    ),
    [lessLabel, providers, categories, searchInputProps, bulkActions]
  );

  const scrollProps = useMemo<CategoryItemsProps['scrollProps']>(
    () => ({
      autoHide: true,
      autoHeightMin: '50rem',
      height: '50rem'
    }),
    []
  );

  return (
    <CategoryItems
      fixHeight={false}
      scrollProps={scrollProps}
      itemsWidthAuto
      {...categoryItemsProps}
      cardTopPart={cardTopPart}
    />
  );
};

export default EligableGames;
