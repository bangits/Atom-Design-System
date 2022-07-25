/* eslint-disable @typescript-eslint/member-ordering */
import { CurrencyGroup, LabelGroup } from '@/components/molecules';
import { DndIcon, EditIcon } from '@/icons';
import { Typography } from '@my-ui/core';
import classNames from 'classnames';
import React from 'react';
import { FC, ReactNode, useState } from 'react';
import { useDrag } from 'react-dnd';
import styles from './DnDFooterItem.module.scss';

export interface DnDFooterItemProps {
  noDataText?: string;
  editClick?: () => void;
  droppable?: boolean;
  draggable?: boolean;
  dragged?: boolean;
  indexValue?: number;
  selectedAndDragged?: boolean;
  onDragChange?(isDragged: boolean): void;
  footerPages: {
    title: string;
    index: number | string;
    groupTitleLabel?: string;
    groupTitle?: string;
    total?: string;
    pages: {
      title: string;
      id?: string | number;
      closeIcon?: boolean;
      endIcon?: ReactNode;
      value?: number | string;
      tooltipText?: string;
    }[];
  };
}

const DnDFooterItem: FC<DnDFooterItemProps> = ({
  footerPages,
  noDataText,
  editClick,
  onDragChange,
  draggable,
  droppable,
  indexValue,
  selectedAndDragged,
  dragged
}) => {
  const [isDropped, setDropped] = useState(false);
  const [isDragged, setDragged] = useState(false);
  const [_, dragRef] = useDrag(
    () => ({
      type: 'DraggableDnDItem'
    }),
    []
  );

  return (
    <div
      className={classNames(styles.FooterContentMain, {
        [styles['FooterContentMain--draggable']]: draggable,
        [styles['FooterContentMain--selected-and-dragged']]: selectedAndDragged
      })}
      ref={dragRef}
      {...(draggable
        ? {
            onDragStart: () => {
              setDragged(true);

              onDragChange?.(true);
            },
            onDragEnd: () => {
              setDragged(false);

              onDragChange?.(false);
            }
          }
        : {})}>
      <span className={styles.FooterContentIndex}>{footerPages.index}</span>
      {indexValue && <span className={styles['DnDItem__index']}>{indexValue}</span>}
      <div className={styles.FooterContent}>
        <div>
          {footerPages?.groupTitleLabel && (
            <LabelGroup title={footerPages?.groupTitle}>
              <Typography variant='p3' className={styles['FooterContent--notCompleted']}>
                {footerPages?.groupTitleLabel}
              </Typography>
            </LabelGroup>
          )}
          <LabelGroup title={footerPages?.title} totalLabel={footerPages?.pages?.length > 0 ? footerPages?.total : ''}>
            {footerPages?.pages?.length > 0 ? (
              <CurrencyGroup currencies={footerPages?.pages} />
            ) : (
              <Typography variant='p4' className={styles['FooterContent--notCompleted']}>
                {noDataText}
              </Typography>
            )}
          </LabelGroup>
        </div>
        <div className={styles.ActionGroupIcons}>
          <div>
            <EditIcon onClick={editClick} />
          </div>
          <div>
            <DndIcon />
          </div>
        </div>
        {isDropped && dragged && <div className={styles['DnDItem__drop-place']} />}
      </div>
    </div>
  );
};

export default DnDFooterItem;
