import { Options } from '@/atom-design-system';
import { NameAndId } from '@/components/molecules/name-and-id';
import { OptionsIcon } from '@/icons';
import { StatusProps } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC, ReactNode, useLayoutEffect, useRef, useState } from 'react';
import { DocumentStatus } from '../document-status';
import styles from './DocumentCard.module.scss';

export interface DocumentCardProps extends StatusProps {
  col: 4;
  title: string;
  logo: ReactNode;
  icon: string;
  id: string;
  verifiedDate: {
    label: string;
    value: string;
  };
  createdDate: {
    label: string;
    value: string;
  };
  noDataText: string;
  statusLabel: string;
  menuItems?: any;
  pageQuantity?: number;
  pageLabel?: string;
}

const DocumentCard: FC<DocumentCardProps> = ({
  createdDate,
  verifiedDate,
  title,
  col,
  noDataText,
  icon,
  logo,
  statusLabel,
  variant,
  id,
  pageQuantity,
  pageLabel,
  menuItems
}) => {
  const [height, setHeight] = useState<number>();

  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>();

  useLayoutEffect(() => {
    const height = containerRef.current.scrollHeight;

    // Using setTimeout for setting the height after first render
    setHeight(height);
  }, [containerRef]);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setIsOpenMenu(false);
      }}
      style={{ position: 'relative' }}>
      <div style={{ transform: 'scale(1.2)', position: 'absolute', zIndex: 1000, right: '-15px', top: '55px' }}>
        {isOpenMenu && <Options data={menuItems} />}
      </div>
      <div
        ref={containerRef}
        className={classNames(styles.DocumentCardWrapper, {
          [styles[`DocumentCardWrapper--${col}`]]: col
        })}>
        <div className={styles.CardHeader}>
          <div style={{ display: 'flex' }}>
            <div style={{ marginRight: '10px', marginTop: '0.5rem' }}>{logo}</div>
            <div>
              <NameAndId name={title || noDataText} id={id || noDataText} />
            </div>
          </div>
          <div>
            <OptionsIcon
              className={styles[`DocumentCardWrapper--menu_button`]}
              onClick={(e) => {
                e.stopPropagation();
                setIsOpenMenu((prev) => !prev);
              }}
            />
          </div>
        </div>
        <div className={styles.TitleContent}>
          <NameAndId defaultColors name={createdDate.label || noDataText} id={createdDate.value || noDataText} />
          <NameAndId defaultColors name={verifiedDate.label || noDataText} id={verifiedDate.value || noDataText} />
        </div>
        <div className={styles.GameWrapper}>
          <div className={styles.GamesContent}></div>
        </div>
      </div>
      <div ref={containerRef} className={styles[`DocumentCardWrapper--footer`]}>
        <DocumentStatus
          pageQuantity={pageQuantity}
          pageLabel={pageLabel}
          startIcon='MessageIcon'
          variant={variant}
          statusLabel={statusLabel}
        />
      </div>
    </div>
  );
};

export default DocumentCard;
