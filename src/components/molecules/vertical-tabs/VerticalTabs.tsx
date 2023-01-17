import { Card, Scroll } from '@my-ui/core';
import classNames from 'classnames';
import { CSSProperties, FC, ReactNode } from 'react';
import styles from './VerticalTabs.module.scss';

export interface VerticalTabsProps {
  tabs: {
    content: ReactNode;
    value: string | number;
  }[];

  value: string | number;

  autoHeightMin?: CSSProperties['height'];

  onChange(value: string | number): void;
}

const VerticalTabs: FC<VerticalTabsProps> = ({ tabs, value, autoHeightMin, onChange, children }) => {
  return (
    <Card className={styles.VerticalTabs}>
      <div className={styles.VerticalTabs__Sidebar}>
        <Scroll autoHeight autoHeightMin={autoHeightMin} showHorizontalScroll={false}>
          {tabs.map((t) => (
            <button
              className={classNames(styles.VerticalTabs__Button, {
                [styles['VerticalTabs__Button--Active']]: value === t.value
              })}
              type='button'
              onClick={() => onChange(t.value)}>
              {t.content}
            </button>
          ))}
        </Scroll>
      </div>

      <div className={styles.VerticalTabs__Content}>{children}</div>
    </Card>
  );
};

export default VerticalTabs;
