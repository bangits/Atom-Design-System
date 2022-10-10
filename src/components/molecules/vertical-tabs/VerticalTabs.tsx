import { Card } from '@my-ui/core';
import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import styles from './VerticalTabs.module.scss';

export interface VerticalTabsProps {
  tabs: {
    icon: ReactNode;
    value: string | number;
  }[];

  value: string | number;

  onChange(value: string | number): void;
}

const VerticalTabs: FC<VerticalTabsProps> = ({ tabs, value, onChange, children }) => {
  return (
    <Card className={styles.VerticalTabs}>
      <div className={styles.VerticalTabs__Sidebar}>
        {tabs.map((t) => (
          <button
            className={classNames(styles.VerticalTabs__Button, {
              [styles['VerticalTabs__Button--Active']]: value === t.value
            })}
            type='button'
            onClick={() => onChange(t.value)}>
            {t.icon}
          </button>
        ))}
      </div>

      <div className={styles.VerticalTabs__Content}>{children}</div>
    </Card>
  );
};

export default VerticalTabs;
