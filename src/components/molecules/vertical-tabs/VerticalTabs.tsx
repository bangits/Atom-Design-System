import { Card, Scroll, Tooltip } from '@my-ui/core';
import classNames from 'classnames';
import { CSSProperties, FC, ReactNode } from 'react';
import styles from './VerticalTabs.module.scss';
import { InfoTooltipIcon } from '@/icons';

export interface VerticalTabsProps {
  tabs: {
    content: ReactNode;
    value: string | number;
  }[];
  title?: string;
  hideTabs?: boolean;
  tooltipText?: string;
  value: string | number;
  autoHeightMin?: CSSProperties['height'];
  onChange(value: string | number): void;
}

const VerticalTabs: FC<VerticalTabsProps> = ({
  tabs,
  value,
  autoHeightMin,
  onChange,
  children,
  title,
  tooltipText,
  hideTabs
}) => {
  return (
    <>
      {title && (
        <span className={styles.VerticalTabs__title}>
          {title}
          {tooltipText && (
            <Tooltip text={tooltipText}>
              <InfoTooltipIcon className={styles.VerticalTabs__tooltip} width='1.5rem' height='1.5rem' />
            </Tooltip>
          )}
        </span>
      )}
      <Card className={styles.VerticalTabs}>
        {!hideTabs && (
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
        )}

        <div className={styles.VerticalTabs__Content}>{children}</div>
      </Card>
    </>
  );
};

export default VerticalTabs;
