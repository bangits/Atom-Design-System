import { Divider } from '@/atom-design-system';
import classNames from 'classnames';
import { Children, FC, Fragment, isValidElement, PropsWithChildren, ReactElement, useMemo } from 'react';
import styles from './DividerList.module.scss';

const DividerList: FC<
  PropsWithChildren<{
    className?: string;
  }>
> = ({ children, className }) => {
  const childrenArray = useMemo(() => Children.toArray(children), [children]);

  return (
    <div className={classNames(styles.DividerList, className)}>
      {childrenArray.map(
        (child: ReactElement, index) =>
          isValidElement(child) && (
            <Fragment key={child.key}>
              {child}

              {index !== childrenArray.length - 1 && <Divider />}
            </Fragment>
          )
      )}
    </div>
  );
};

export default DividerList;
