/// <reference types="react" />
import { FiltersProps, TableProps } from '../..';
import { StatusProps } from '@my-ui/core';
export interface FetchDataParameters<T, K> {
    filters: K | null;
    sortedBy: {
        id: string;
        desc: boolean;
    } | null;
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
declare function DataTable<T extends {}, K>({ tableProps, filterProps, defaultSorted, fetchData, isShowedFilter, onViewButtonClick, onEditButtonClick }: DataTableProps<T, K>): JSX.Element;
export default DataTable;
