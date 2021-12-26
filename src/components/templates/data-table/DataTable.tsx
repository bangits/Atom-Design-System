import { Filters, FiltersProps, Table, TableProps } from '@/components';
import { ButtonWithIcon, Divider } from '@/components/atoms';
import { SettingsIcon } from '@/icons';
import { noImage, noImageGame } from '@/img';
import {
  IconButton,
  Icons,
  Pagination,
  PaginationProps,
  Select,
  SelectProps,
  Status,
  StatusProps,
  Tooltip
} from '@my-ui/core';
import classNames from 'classnames';
import { MouseEvent, useCallback, useEffect, useMemo, useReducer, useState } from 'react';
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
  columnDropdownTranslations?: {
    selectAllLabel: string;
    clearButtonLabel: string;
    dropdownLabel: string;
  };
  filtersDropdownProps?: SelectProps<any, boolean, any>;
  isShowedFilter?: boolean;
  defaultSorted?: {
    id: string;
    desc: boolean;
  };
  defaultPaginationPage?: number;
  defaultPageSize?: number;
  actionsButtonDisabledTime?: number;

  paginationProps: {
    pageSizeSelect: Omit<PaginationProps['pageSizeSelect'], 'onChange'>;
    getTotalCountInfo(pagination: Pagination): string;
  } & Pick<PaginationProps, 'jumpToPage'>;

  rowCount: number;
  refreshLabel?: string;
  onRefreshButtonClick?: (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;

  tableProps: Omit<TableProps<T>, 'columns' | 'actions'> & {
    columns?: (TableProps<T>['columns'][number] & {
      variant?: 'status' | 'image' | 'hovered-image' | 'circle-image';
      getVariant?: (value: string | number) => StatusProps['variant'];
      getVariantName?: (value: string | number) => string;
    })[];
    actions?: {
      iconName?: keyof typeof Icons;
      shouldShow?: TableProps<T>['actions'][number]['shouldShow'];
      shouldShowBulkAction?: (rows: T[]) => true;
      onClick: (columns: T | T[]) => void;
      tooltipText?: string;
    }[];
  };

  onTableConfigChange?: (columns: SelectProps<any, boolean, any>['options'], selectedColumns: string[]) => void;
  columnsConfigDefaultValue?: string[];

  filterProps: Omit<FiltersProps<K>, 'onSubmit' | 'onClear'>;
  fetchData(fetchDataParameters: FetchDataParameters<T, K & { pagination: Pagination }>): void;
}

function DataTable<T extends {}, K>({
  tableProps,
  filterProps,
  defaultSorted,
  filtersDropdownProps,
  fetchData,
  isShowedFilter = true,
  defaultPaginationPage = 1,
  defaultPageSize = 20,
  paginationProps,
  columnDropdownTranslations,
  rowCount,
  refreshLabel = 'Refresh',
  onRefreshButtonClick,
  actionsButtonDisabledTime = 2,
  onTableConfigChange,
  columnsConfigDefaultValue: columnsConfigDefaultValueProp
}: DataTableProps<T, K>) {
  const [sortedBy, setSortedBy] = useState<FetchDataParameters<T, K>['sortedBy']>(defaultSorted || null);
  const [filters, setFilters] = useState<K | null>(null);

  const [selectedRows, setSelectedRows] = useState<T[]>([]);
  const [isDisabledRefreshButton, setDisabledRefreshButton] = useState(false);
  const [isFiltersOpened, setFiltersOpened] = useState(false);

  const dropdownOptions = useMemo<SelectProps<any, boolean, any>['options']>(
    () =>
      tableProps.columns.map((column) => ({
        label: column.Header,
        value: column.accessor,
        disabled: false
      })),
    []
  );

  const columnsConfigDefaultValue = useMemo(
    () => columnsConfigDefaultValueProp || dropdownOptions.map((value) => value.value),
    [dropdownOptions, columnsConfigDefaultValueProp]
  );
  const [dropdownValues, setDropdownValues] = useState<string[]>(columnsConfigDefaultValue);

  const configColumns = useMemo(
    () =>
      dropdownValues.length === 0
        ? tableProps.columns.filter((column) => columnsConfigDefaultValue.slice(0, 3).includes(column.accessor))
        : tableProps.columns.filter((column) => dropdownValues.includes(column.accessor)),
    [dropdownValues, tableProps.columns, columnsConfigDefaultValue]
  );

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
    (
      changedFilters?: K | null,
      changedSorted?: FetchDataParameters<T, K>['sortedBy'],
      updatedPagination?: Pagination
    ) => {
      fetchData({
        filters: {
          ...(changedFilters || filters),
          pagination: updatedPagination || pagination
        },
        sortedBy: changedSorted === undefined ? sortedBy : changedSorted
      });
    },
    [filters, sortedBy, pagination]
  );

  const onFiltersChange = useCallback(
    (changedFilters: K) => {
      setFilters(changedFilters);

      setPagination(initialPagination);

      onDataChange(changedFilters, undefined, initialPagination);
    },
    [onDataChange, initialPagination]
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
    return (configColumns || []).map((column) => ({
      ...column,
      ...(column.variant === 'status'
        ? {
            renderColumn: (_, value) => (
              <Status variant={column.getVariant(value)}>{column.getVariantName(value)}</Status>
            ),
            maxWidth: '11rem'
          }
        : column.variant === 'circle-image'
        ? {
            renderColumn: (_, value) => <img className={styles.ImageColumnCircle} src={value || noImage} />
          }
        : column.variant === 'hovered-image'
        ? {
            renderColumn: (_, value) => {
              return <img className={styles.ImageHoverColumn} src={value || noImageGame} />;
            }
          }
        : column.variant === 'image'
        ? {
            renderColumn: (_, value) => {
              return <img className={styles.ImageColumn} src={value || noImageGame} />;
            }
          }
        : {})
    }));
  }, [tableProps.columns, dropdownValues]);

  const isTableHaveHoveredImage = useMemo(() => {
    return tableProps.columns.some((column) => column.variant === 'hovered-image');
  }, [tableProps.columns]);

  const paginationTotalCountInfo = useMemo<string>(
    () => paginationProps.getTotalCountInfo(pagination),
    [paginationProps.getTotalCountInfo, pagination]
  );

  const actions = useMemo<
    (DataTableProps<T, {}>['tableProps']['actions'][number] & TableProps<T>['actions'][number])[]
  >(
    () => [
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
    ],
    [tableProps.actions]
  );

  const tableBulkActions = useMemo(
    () =>
      actions && selectedRows.length > 1
        ? actions.map(
            ({ component: Component, onClick, shouldShow, props }) =>
              (!shouldShow || selectedRows.every((column) => shouldShow(column))) && (
                <Component onClick={() => onClick(selectedRows)} {...props} />
              )
          )
        : null,
    [actions, selectedRows]
  );

  useEffect(() => {
    if (pagination === initialPagination) return;

    onDataChange(null);
  }, [pagination]);

  return (
    <div className={styles.DataTablePageWrapper}>
      {isShowedFilter && (
        <Filters
          {...filterProps}
          onFiltersOpenedChange={setFiltersOpened}
          selectProps={filtersDropdownProps}
          className={classNames(styles.Filters, filterProps.className)}
          onSubmit={onFiltersChange}
          onClear={onFiltersChange}
        />
      )}

      <div className={styles.TableConfigsWrapper}>
        <div className={styles.TableLeftSideWrapper}>
          <Select
            isMulti
            dropdown
            dropdownLabel={columnDropdownTranslations?.dropdownLabel || 'Columns'}
            dropdownIcon={<SettingsIcon width='1.8rem' height='1.8rem' />}
            clearButton
            clearButtonLabel={columnDropdownTranslations?.clearButtonLabel || 'Clear'}
            selectAll
            selectAllLabel={columnDropdownTranslations?.selectAllLabel || 'All'}
            color='primary'
            options={dropdownOptions}
            disableSelectedOptions={dropdownValues.length < 4}
            value={dropdownValues.length === 0 ? columnsConfigDefaultValue.slice(0, 3) : dropdownValues}
            onChange={(values) => {
              setDropdownValues(values);

              if (onTableConfigChange) onTableConfigChange(dropdownOptions, values);
            }}
            className={styles.TableConfigSelect}
          />

          <Divider>
            <ButtonWithIcon
              icon='RotateIcon'
              disabled={isDisabledRefreshButton}
              onClick={(event) => {
                if (actionsButtonDisabledTime) {
                  setDisabledRefreshButton(true);

                  setTimeout(() => setDisabledRefreshButton(false), actionsButtonDisabledTime * 1000);
                }

                if (onRefreshButtonClick) onRefreshButtonClick(event);
              }}
              className={styles.RefreshButton}
              iconProps={{
                width: '1.8rem',
                height: '1.8rem'
              }}>
              {refreshLabel}
            </ButtonWithIcon>
          </Divider>

          <div className={styles.TableActionsWrapper}>{tableBulkActions}</div>
        </div>

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
      </div>

      <Table
        {...tableProps}
        height={`calc(100vh - ${isFiltersOpened ? '50rem' : '30rem'})`}
        fetch={onTableFetchData}
        className={classNames(styles.Table, tableProps.className, {
          [styles.TableHaveHoveredImage]: isTableHaveHoveredImage,
          [styles.TableHaveData]: !!tableProps.data?.length
        })}
        onSelectedColumnsChange={(columns) => {
          setSelectedRows(columns.map((c) => c.original));
          if (tableProps.onSelectedColumnsChange) tableProps.onSelectedColumnsChange(columns);
        }}
        actions={actions}
        columns={tableColumns}
      />
    </div>
  );
}

export default DataTable;
