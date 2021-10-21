import { Filters, FiltersProps, Table, TableProps } from '@/components';
import { ObjectMock } from '@/types';
import { useCallback, useState } from 'react';
import styles from './DataTable.module.scss';

export interface FetchDataParameters<T, K> {
  filters: K | null;
  sortedBy: { id: keyof T; desc: boolean } | null;
}
export interface DataTableProps<T extends ObjectMock, K> {
  tableProps: TableProps<T>;
  filterProps: Omit<FiltersProps<K>, 'onSubmit' | 'onClear'>;
  fetchData(fetchDataParameters: FetchDataParameters<T, K>): void;
  defaultSorted?: {
    id: keyof T;
    desc: boolean;
  };
  isShowedFilter?: boolean;
}

function DataTable<T extends ObjectMock, K>({
  tableProps,
  filterProps,
  defaultSorted,
  fetchData,
  isShowedFilter = true
}: DataTableProps<T, K>) {
  const [sortedBy, setSortedBy] = useState<FetchDataParameters<T, K>['sortedBy']>(defaultSorted || null);
  const [filters, setFilters] = useState<K | null>(null);

  const onDataChange = useCallback(
    (changedFilters?: K | null, changedSorted?: FetchDataParameters<T, K>['sortedBy']) => {
      fetchData({
        filters: changedFilters || filters,
        sortedBy: changedSorted || sortedBy
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
      const sort = tableData.sortBy && tableData.sortBy[0];

      if (sort && sort.id && (sort.id !== sortedBy?.id || sort.desc !== sortedBy?.desc)) {
        const changedSortedBy = {
          id: sort.id,
          desc: !!sort.desc
        };
        setSortedBy(changedSortedBy);
        onDataChange(null, changedSortedBy);
      }
    },
    [onDataChange]
  );

  return (
    <div className={styles.DataTablePageWrapper}>
      {isShowedFilter && <Filters {...filterProps} onSubmit={onFiltersChange} onClear={onFiltersChange} />}

      <Table {...tableProps} fetch={onTableFetchData} />
    </div>
  );
}

export default DataTable;
