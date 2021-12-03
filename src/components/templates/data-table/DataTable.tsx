import { Filters, FiltersProps, Table, TableProps } from '@/components';
import { IconButton, Icons, Pagination, PaginationProps, Status, StatusProps, Tooltip } from '@my-ui/core';
import classNames from 'classnames';
import { useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import styles from './DataTable.module.scss';

export interface Pagination {
  page: number;
  pageSize: number;
}
export interface FetchDataParameters<T, K> {
  filters: K | null;
  sortedBy: { id: string; desc: boolean } | null;
}
export interface DataTableProps<T extends {}, K> {
  isShowedFilter?: boolean;
  isShowedPagination?: boolean;
  defaultSorted?: {
    id: string;
    desc: boolean;
  };
  defaultPaginationPage?: number;
  defaultPageSize?: number;

  paginationProps: {
    pageSizeSelect: Omit<PaginationProps['pageSizeSelect'], 'onChange'>;
    getTotalCountInfo(pagination: Pagination): string;
  } & Pick<PaginationProps, 'jumpToPage'>;

  rowCount: number;

  tableProps: Omit<TableProps<T>, 'columns' | 'actions'> & {
    columns?: (TableProps<T>['columns'][number] & {
      variant?: 'status' | 'image';
      getVariant?: (value: string | number) => StatusProps['variant'];
      getVariantName?: (value: string | number) => string;
    })[];
    actions?: {
      iconName: keyof typeof Icons;
      shouldShow: TableProps<T>['actions'][number]['shouldShow'];
      onClick: TableProps<T>['actions'][number]['onClick'];
      tooltipText?: string;
    }[];
  };
  filterProps: Omit<FiltersProps<K>, 'onSubmit' | 'onClear'>;
  fetchData(fetchDataParameters: FetchDataParameters<T, K & { pagination: Pagination }>): void;
  onEditButtonClick?(column: T): void;
  onViewButtonClick?(column: T): void;
}

function DataTable<T extends {}, K>({
  tableProps,
  filterProps,
  defaultSorted,
  fetchData,
  isShowedFilter = true,
  isShowedPagination = true,
  onViewButtonClick,
  onEditButtonClick,
  defaultPaginationPage = 1,
  defaultPageSize = 20,
  paginationProps,
  rowCount
}: DataTableProps<T, K>) {
  const [sortedBy, setSortedBy] = useState<FetchDataParameters<T, K>['sortedBy']>(defaultSorted || null);
  const [filters, setFilters] = useState<K | null>(null);

  const initialPagination = useMemo(
    () => ({
      page: defaultPaginationPage,
      pageSize: defaultPageSize
    }),
    []
  );

  const [pagination, setPagination] = useReducer(
    (prevPagination: Pagination, updatedPagination: Partial<Pagination>): Pagination => ({
      ...prevPagination,
      ...updatedPagination
    }),
    initialPagination
  );

  const onDataChange = useCallback(
    (changedFilters?: K | null, changedSorted?: FetchDataParameters<T, K>['sortedBy']) => {
      fetchData({
        filters: {
          ...(changedFilters || filters),
          pagination
        },
        sortedBy: changedSorted === undefined ? sortedBy : changedSorted
      });
    },
    [filters, sortedBy, pagination]
  );

  const onFiltersChange = useCallback(
    (changedFilters: K) => {
      setFilters(changedFilters);

      onDataChange(changedFilters);
    },
    [onDataChange]
  );

  const onTableFetchData = useCallback<TableProps<T>['fetch']>(
    (tableData) => {
      const sort = tableData.sortBy;

      const changedSortedBy = sort
        ? {
            id: sort.id,
            desc: !!sort.desc
          }
        : null;

      setSortedBy(changedSortedBy);
      onDataChange(null, changedSortedBy);
    },
    [onDataChange]
  );

  const onPaginationChange = useCallback((value: number) => {
    if (!value) return;

    setPagination({
      page: value
    });
  }, []);

  const onPaginationSizeChange = useCallback((value: number) => {
    if (!value) return;

    setPagination({
      page: 1,
      pageSize: value
    });
  }, []);

  const tableColumns = useMemo(() => {
    return (tableProps.columns || []).map((column) => ({
      ...column,
      ...(column.variant === 'status'
        ? {
            renderColumn: (value) => <Status variant={column.getVariant(value)}>{column.getVariantName(value)}</Status>,
            maxWidth: '9.5rem'
          }
        : column.variant === 'image'
        ? {
            renderColumn: (_, value) => <img className={styles.ImageColumn} src={value} />
          }
        : {})
    }));
  }, [tableProps.columns]);

  const paginationTotalCountInfo = useMemo<string>(
    () => paginationProps.getTotalCountInfo(pagination),
    [paginationProps.getTotalCountInfo, pagination]
  );

  useEffect(() => {
    if (pagination === initialPagination) return;

    onDataChange(null, null);
  }, [pagination]);

  return (
    <div className={styles.DataTablePageWrapper}>
      {isShowedFilter && (
        <Filters
          {...filterProps}
          className={classNames(styles.Filters, filterProps.className)}
          onSubmit={onFiltersChange}
          onClear={onFiltersChange}
        />
      )}

      {isShowedPagination && (
        <Pagination
          onChange={onPaginationChange}
          page={pagination.page}
          {...paginationProps}
          totalPagesCount={Math.ceil(rowCount / pagination.pageSize)}
          totalCountInfo={paginationTotalCountInfo}
          pageSizeSelect={{
            ...paginationProps.pageSizeSelect,
            onChange: onPaginationSizeChange
          }}
          className={styles.PaginationWrapper}
        />
      )}

      <Table
        {...tableProps}
        fetch={onTableFetchData}
        className={classNames(styles.Table, tableProps.className)}
        actions={[
          ...(onEditButtonClick
            ? [
                {
                  component: IconButton,
                  onClick: onEditButtonClick,
                  props: {
                    icon: <Icons.EditIcon />
                  }
                }
              ]
            : []),
          ...(onViewButtonClick
            ? [
                {
                  component: IconButton,
                  onClick: onViewButtonClick,
                  props: {
                    icon: <Icons.ViewIcon />
                  }
                }
              ]
            : []),
          ...(tableProps.actions?.map((action) => {
            const IconComponent = Icons[action.iconName];

            return {
              component: (props) => {
                return (
                  <Tooltip showEvent='hover' text={action.tooltipText}>
                    <IconButton {...props} />
                  </Tooltip>
                );
              },
              onClick: action.onClick,
              shouldShow: action.shouldShow,
              props: {
                icon: <IconComponent />
              }
            };
          }) || [])
        ]}
        columns={tableColumns}
      />
    </div>
  );
}

export default DataTable;
