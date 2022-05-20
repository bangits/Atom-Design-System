import { Options } from '@/atom-design-system';
import { NameAndId } from '@/components/molecules/name-and-id';
import { OptionsIcon } from '@/icons';
import { StatusProps, Typography } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC, ReactNode, useLayoutEffect, useRef, useState } from 'react';
import { DocumentStatus } from '../document-status';
import styles from './DocumentCard.module.scss';

export interface DocumentCardProps extends StatusProps {
  col: 4;
  title: string;
  logo: ReactNode;
  onArrowClick: () => void;
  icon: string;
  verifiedDate: {
    label: string;
    value: string;
  };
  documentId: {
    label: string;
    value: string;
  };
  noDataText: string;
  statusLabel: string;
  menuItems: any;
}

const DocumentCard: FC<DocumentCardProps> = ({
  documentId,
  verifiedDate,
  title,
  col,
  noDataText,
  onArrowClick,
  icon,
  logo,
  statusLabel,
  variant,
  menuItems
}) => {
  const [isOpenedCollapse, setOpenedCollapse] = useState<boolean>(false);
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
      style={{ position: 'relative', width: '315px' }}>
      <div style={{ transform: 'scale(1.2)', position: 'absolute', zIndex: 1, right: '-15px', top: '55px' }}>
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
            <Typography variant='p4' component='p'>
              {title}
            </Typography>
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
          <NameAndId defaultColors name={documentId.label || noDataText} id={documentId.value || noDataText} />
          <NameAndId defaultColors name={verifiedDate.label || noDataText} id={verifiedDate.value || noDataText} />
        </div>
        <div className={styles.GameWrapper}>
          <div className={styles.GamesContent}></div>
        </div>
      </div>
      <div ref={containerRef} className={styles[`DocumentCardWrapper--footer`]}>
        <DocumentStatus
          startIcon='MessageIcon'
          variant={variant}
          statusLabel={statusLabel}
          actions={[
            {
              onClick: onArrowClick,
              buttonVariant: 'dark',
              iconName: 'TimeIcon'
            }
          ]}
        />
      </div>
    </div>
  );
};

export default DocumentCard;
