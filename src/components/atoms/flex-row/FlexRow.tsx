import classNames from 'classnames';
import { Children, FC, useMemo } from 'react';
import styles from './FlexRow.module.scss';

export interface FlexRowProps {
  gap?: number;
  className?: string;
}

const FlexRow: FC<FlexRowProps> = ({ gap = 1, children, className }) => {
  const childrenArray = useMemo(() => Children.toArray(children), [children]);

  return (
    <div
      className={classNames(
        styles.FlexRow,
        {
          [styles[`FlexRow--Gap-${gap}`]]: gap
        },
        className
      )}>
      {childrenArray.map((child, index) => (
        <div className={styles.FlexRow__Item} key={index}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default FlexRow;
