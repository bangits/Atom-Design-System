import { ButtonWithIcon, DialogView, DialogViewProps } from '@/components';
import { typedMemo } from '@/helpers';
import { Status, StatusProps } from '@my-ui/core';
import { MouseEvent, ReactNode, useEffect, useMemo, useRef } from 'react';
import { Table, TableProps } from '..';
import styles from './CollapsableTable.module.scss';

export interface BaseCollapsableTableProps {
  refreshButtonLabel?: ReactNode;
  onRefreshButtonClick?(event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void;
}

export interface CollapsableTableProps extends BaseCollapsableTableProps {
  dialogViewProps: DialogViewProps;
  tableProps?: Omit<TableProps<any>, 'columns'> & {
    columns: (TableProps<any>['columns'][number] & {
      variant?: 'status' | 'image' | 'hovered-image' | 'circle-image';
      getVariant?: (value: string | number) => StatusProps['variant'];
      getVariantName?: (value: string | number) => string;
    })[];
  };
}

const CollapsableTable = ({ dialogViewProps, ...props }: CollapsableTableProps) => {
  const memoizedProps = useRef(props);

  const { tableProps, refreshButtonLabel, onRefreshButtonClick } = props.tableProps ? props : memoizedProps.current;

  useEffect(() => {
    if (props.tableProps) memoizedProps.current = props;
  }, [props]);

  // TODO:
  const tableColumns = useMemo(() => {
    return (tableProps?.columns || []).map((column) => ({
      ...column,
      ...(column.variant === 'status'
        ? {
            renderColumn: (_, value) => (
              <Status variant={column.getVariant(value)}>{column.getVariantName(value)}</Status>
            ),
            maxWidth: '11rem'
          }
        : {})
    }));
  }, [tableProps?.columns]);

  return (
    <DialogView {...dialogViewProps}>
      <div className={styles.CollapsableTableWrapper}>
        <ButtonWithIcon
          icon='RotateIcon'
          onClick={onRefreshButtonClick}
          iconProps={{
            width: '1.8rem',
            height: '1.8rem'
          }}
          className={styles.RefreshButton}>
          {refreshButtonLabel}
        </ButtonWithIcon>

        <Table {...tableProps} columns={tableColumns} />
      </div>
    </DialogView>
  );
};

export default typedMemo(CollapsableTable);
