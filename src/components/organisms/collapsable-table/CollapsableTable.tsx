import { ButtonWithIcon, DialogView, DialogViewProps } from '@/components';
import { typedMemo } from '@/helpers';
import { MouseEvent, ReactNode, useEffect, useRef } from 'react';
import { Table, TableProps } from '..';
import styles from './CollapsableTable.module.scss';

export interface BaseCollapsableTableProps {
  refreshButtonLabel: ReactNode;
  onRefreshButtonClick(event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void;
}

export interface CollapsableTableProps extends BaseCollapsableTableProps {
  dialogViewProps: DialogViewProps;
  tableProps: TableProps<any>;
}

const CollapsableTable = ({ dialogViewProps, ...props }: CollapsableTableProps) => {
  const memoizedProps = useRef(props);

  const { tableProps, refreshButtonLabel, onRefreshButtonClick } = props.tableProps ? props : memoizedProps.current;

  useEffect(() => {
    if (props.tableProps) memoizedProps.current = props;
  }, [props]);

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

        <Table {...tableProps} />
      </div>
    </DialogView>
  );
};

export default typedMemo(CollapsableTable);
