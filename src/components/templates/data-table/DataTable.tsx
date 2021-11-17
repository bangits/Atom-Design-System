import { Filters, FiltersProps, Table, TableProps } from '@/components';
import { IconButton, Icons, Status, StatusProps } from '@my-ui/core';
import classNames from 'classnames';
import { useCallback, useMemo, useState } from 'react';
import styles from './DataTable.module.scss';

export interface FetchDataParameters<T, K> {
  filters: K | null;
  sortedBy: { id: string; desc: boolean } | null;
}
export interface DataTableProps<T extends {}, K> {
  isShowedFilter?: boolean;
  defaultSorted?: {
    id: string;
    desc: boolean;
  };
  tableProps: Omit<TableProps<T>, 'columns'> & {
    columns?: (TableProps<T>['columns'][number] & {
      variant?: 'status' | 'image';
      getVariant?: (value: string | number) => StatusProps['variant'];
      getVariantName?: (value: string | number) => string;
    })[];
  };
  filterProps: Omit<FiltersProps<K>, 'onSubmit' | 'onClear'>;
  fetchData(fetchDataParameters: FetchDataParameters<T, K>): void;
  onEditButtonClick?(column: T): void;
  onViewButtonClick?(column: T): void;
}

function DataTable<T extends {}, K>({
  tableProps,
  filterProps,
  defaultSorted,
  fetchData,
  isShowedFilter = true,
  onViewButtonClick,
  onEditButtonClick
}: DataTableProps<T, K>) {
  const [sortedBy, setSortedBy] = useState<FetchDataParameters<T, K>['sortedBy']>(defaultSorted || null);
  const [filters, setFilters] = useState<K | null>(null);

  const onDataChange = useCallback(
    (changedFilters?: K | null, changedSorted?: FetchDataParameters<T, K>['sortedBy']) => {
      fetchData({
        filters: changedFilters || filters,
        sortedBy: changedSorted === undefined ? sortedBy : changedSorted
      });
    },
    [filters, sortedBy]
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
            renderColumn: (value) => <img className={styles.imageColumn} src={value} />
          }
        : {})
    }));
  }, [tableProps.columns]);

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
            : [])
        ]}
        columns={tableColumns}
      />
    </div>
  );
}

export default DataTable;
