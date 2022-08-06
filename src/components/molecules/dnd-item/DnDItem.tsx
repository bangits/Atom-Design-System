import { Icons } from '@/atom-design-system';
import { typedMemo } from '@/helpers';
import { Checkbox, TextWithTooltip, Tooltip } from '@my-ui/core';
import classNames from 'classnames';
import { forwardRef, PropsWithChildren, useEffect, useRef, useState } from 'react';
import styles from './DnDItem.module.scss';

export interface DnDItemProps {
  selectedAndDragged?: boolean;
  showRemoveButton?: boolean;
  badgeQuantity?: number;
  checkboxChecked?: boolean;
  showCheckbox?: boolean;
  indexValue?: number | string;
  droppable?: boolean;
  draggable?: boolean;
  sortable?: boolean;
  dragged?: boolean;
  imgSrc?: string;
  sortTooltipText?: string;

  onRemoveButtonClick?(): void;
  onCheckboxToggle?(): void;
  onDragChange?(isDragged: boolean): void;
  onDropChange?(isDropped: boolean): void;
}

const DnDItem = forwardRef<HTMLDivElement, PropsWithChildren<DnDItemProps>>(
  (
    {
      children,
      indexValue,
      showRemoveButton,
      sortable,
      droppable,
      dragged,
      showCheckbox,
      imgSrc,
      badgeQuantity,
      onCheckboxToggle,
      onRemoveButtonClick,
      draggable,
      checkboxChecked,
      onDragChange,
      selectedAndDragged,
      sortTooltipText,
      onDropChange
    },
    ref
  ) => {
    const [isDropped, setDropped] = useState(false);
    const [isDragged, setDragged] = useState(false);

    const timerRef = useRef<NodeJS.Timeout>(null);

    useEffect(
      () => () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      },
      [timerRef.current]
    );

    return (
      <>
        <div
          ref={ref}
          className={classNames(styles['DnDItem'], {
            [styles['DnDItem--draggable']]: draggable,
            [styles['DnDItem--selected-and-dragged']]: selectedAndDragged
          })}
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
            : {})}
          {...(droppable
            ? {
                onDragOver: () => {
                  if (timerRef.current) clearTimeout(timerRef.current);

                  onDropChange?.(true);
                  setDropped(true);
                },
                onDragLeave: () => {
                  timerRef.current = setTimeout(() => {
                    onDropChange?.(false);
                    setDropped(false);
                  }, 100);
                },

                onDrop: () => {
                  onDropChange?.(false);
                  setDropped(false);
                }
              }
            : {})}>
          {indexValue && <span className={styles['DnDItem__index']}>{indexValue}</span>}

          <div className={styles['DnDItem__content']}>
            <div className={styles['DnDItem__children']}>
              {imgSrc && <img className={styles['DnDItem__img']} src={imgSrc} alt={children?.toString() || ''} />}

              <TextWithTooltip displayText={children} className={styles['DnDItem__text']}>
                {children}
              </TextWithTooltip>
            </div>

            {isDragged && badgeQuantity > 1 && <span className={styles['DnDItem__badge']}>{badgeQuantity}</span>}
            {showCheckbox && (
              <Checkbox checked={checkboxChecked} onChange={onCheckboxToggle} className={styles['DnDItem__checkbox']} />
            )}
            {sortable && (
              <div className={classNames(styles['DnDItem__sort'], 'DnD-SortIcon')}>
                <Tooltip text={sortTooltipText}>
                  <Icons.SortIcon />
                </Tooltip>
              </div>
            )}

            {showRemoveButton && (
              <button type='button' className={styles['DnDItem__remove']} onClick={onRemoveButtonClick}>
                <Icons.CloseIcon />
              </button>
            )}
          </div>
        </div>

        {isDropped && dragged && <div className={styles['DnDItem__drop-place']} />}
      </>
    );
  }
);

export default typedMemo(DnDItem);
