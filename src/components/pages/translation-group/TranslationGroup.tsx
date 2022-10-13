import { Scroll } from '@my-ui/core';
import { FC, ReactNode } from 'react';
import styles from './TranslationGroup.module.scss';

export interface TranslationGroupProps {
  rows: {
    title: ReactNode;
    icon?: ReactNode;
    content: ReactNode;
  }[];

  leftElements?: ReactNode[];
  rightElements?: ReactNode[];
}

const TranslationGroup: FC<TranslationGroupProps> = ({ rows, leftElements, rightElements }) => {
  return (
    <div className={styles.TranslationGroup}>
      <div className={styles['TranslationGroup__actions']}>
        <div className={styles['TranslationGroup__left-elements']}>{leftElements}</div>
        <div className={styles['TranslationGroup__right-elements']}>{rightElements}</div>
      </div>

      <Scroll autoHide={false} showVerticalScroll={false}>
        <div className={styles['TranslationGroup__rows']}>
          {rows.map((row) => (
            <div className={styles['TranslationGroup__row']} key={row.title?.toString()}>
              <h3 className={styles['TranslationGroup__row-title']}>
                {row.icon && <span className={styles['TranslationGroup__row-icon']}>{row.icon}</span>} {row.title}
              </h3>

              <div className={styles['TranslationGroup__row-content']}>
                <Scroll autoHeightMin={320}>
                  <div className={styles['TranslationGroup__row-content--after-scroll']}>{row.content}</div>
                </Scroll>
              </div>
            </div>
          ))}
        </div>
      </Scroll>
    </div>
  );
};

export default TranslationGroup;
