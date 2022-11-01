import classNames from 'classnames';
import { CreatableTableProps } from './CreatableTable';
import styles from './CreatableTable.module.scss';

export interface CreatableColumnProps {
  index?: number;
  column: CreatableTableProps['columns'][];
}

export const CreatableColumn = ({ column, index }) => {
  return (
    <th key={index} className={column.props && classNames(styles['CreatableTable--amount-percentage'])}>
      {column.type === 'custom' ? (
        <>
          {column.props && column.props.afterLabel}
          {column.value}
          {column.props && column.props.beforeLabel}
        </>
      ) : (
        column.value
      )}
    </th>
  );
};
