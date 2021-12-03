/// <reference types="react" />
import { FiltersProps, TableProps } from '../..';
import { Icons, PaginationProps, StatusProps } from '@my-ui/core';
export interface Pagination {
    page: number;
    pageSize: number;
}
export interface FetchDataParameters<T, K> {
    filters: K | null;
    sortedBy: {
        id: string;
        desc: boolean;
    } | null;
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
        }[];
    };
    filterProps: Omit<FiltersProps<K>, 'onSubmit' | 'onClear'>;
    fetchData(fetchDataParameters: FetchDataParameters<T, K & {
        pagination: Pagination;
    }>): void;
    onEditButtonClick?(column: T): void;
    onViewButtonClick?(column: T): void;
}
declare function DataTable<T extends {}, K>({ tableProps, filterProps, defaultSorted, fetchData, isShowedFilter, isShowedPagination, onViewButtonClick, onEditButtonClick, defaultPaginationPage, defaultPageSize, paginationProps, rowCount }: DataTableProps<T, K>): JSX.Element;
export default DataTable;
