import { Icons, SearchInput } from '@/atom-design-system';
import { DnDItemProps } from '@/components';
import { arrayMoveMutable } from '@/helpers';
import { Card, IconButton, Scroll, Tooltip } from '@my-ui/core';
import classNames from 'classnames';
import { Dispatch, FC, PropsWithChildren, ReactNode, SetStateAction, useMemo, useRef, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { SortableDnDItem, SortableList } from '../sortable-list';
import styles from './DnDSelection.module.scss';
import DraggableDnDItem from './DraggableDnDItem';
import DropPlace from './DropPlace';

export type DnDSelectionItem = PropsWithChildren<Pick<DnDItemProps, 'imgSrc' | 'indexValue'>>;

export type SortableDndItem = DnDSelectionItem & {
  notAddToDraggableItems?: boolean;
};

export interface DnDSelectionProps {
  draggableItems: DnDSelectionItem[];
  initialSortableItems?: SortableDndItem[];
  draggableSectionTitle?: ReactNode;
  sortableSectionTitle?: ReactNode;
  emptyDroppableText?: ReactNode;
  emptyDroppableIcon?: ReactNode;
  showButtons?: boolean;
  sortTooltipText?: string;
  applyButtonTooltipText?: string;
  closeButtonTooltipText?: string;
  renderDroppableTopContent?: (renderDroppableArguments: {
    setSortableItems: Dispatch<SetStateAction<DnDSelectionItem[]>>;
  }) => ReactNode;
  onCloseButtonClick?(): void;
  onApplyButtonClick?(draggableItems: DnDSelectionItem[], sortableItems: DnDSelectionItem[]): void;
}

const DnDSelection: FC<DnDSelectionProps> = ({
  draggableItems: initialDraggableItems,
  initialSortableItems,
  onApplyButtonClick,
  onCloseButtonClick,
  draggableSectionTitle,
  sortableSectionTitle,
  showButtons,
  renderDroppableTopContent,
  emptyDroppableIcon = <Icons.EmptyFormIcon />,
  emptyDroppableText,
  sortTooltipText,
  applyButtonTooltipText,
  closeButtonTooltipText
}) => {
  const [selectedDraggableItems, setSelectedDraggableItems] = useState<DnDSelectionProps['draggableItems']>([]);

  const [sortableItems, setSortableItems] = useState(initialSortableItems || []);
  const [draggableItems, setDraggableItems] = useState(initialDraggableItems || []);
  const [search, setSearch] = useState('');

  const singleSelectedDraggableItem = useRef<DnDSelectionItem>(null);
  const droppedItem = useRef<DnDSelectionItem>(null);

  const [isDragged, setDragged] = useState(false);

  const selectedDraggableItemsHashMap = useMemo(
    () =>
      selectedDraggableItems.reduce(
        (acc, item) => ({
          ...acc,
          [item.indexValue]: true
        }),
        {}
      ),
    [selectedDraggableItems]
  );

  const searchedDraggableItems = useMemo(
    () => draggableItems.filter((i) => !search || i.children.toString().toLowerCase().includes(search.toLowerCase())),
    [draggableItems, search]
  );

  return (
    <DndProvider backend={HTML5Backend}>
      {showButtons && (
        <div className={styles['DnDSelection__buttons']}>
          <Tooltip text={applyButtonTooltipText} showEvent='hover'>
            <IconButton
              onClick={() => onApplyButtonClick?.(draggableItems, sortableItems)}
              icon={<Icons.ApplyIcon />}
              type='button'
            />
          </Tooltip>
          <Tooltip text={closeButtonTooltipText} showEvent='hover'>
            <IconButton onClick={onCloseButtonClick} icon={<Icons.CloseIcon />} type='button' />
          </Tooltip>
        </div>
      )}

      <div className={styles['DnDSelection']}>
        <div
          className={classNames(
            styles['DnDSelection__card-container'],
            styles['DnDSelection__card-container--draggable']
          )}>
          {draggableSectionTitle && <div className={styles['DnDSelection__title']}>{draggableSectionTitle}</div>}
          <Card className={classNames(styles['DnDSelection__card'], styles['DnDSelection__card--draggable'])}>
            <SearchInput placeholder='Search' fullWidth onChange={(e) => setSearch(e.target.value)} />
            <Scroll autoHeightMin={400} showHorizontalScroll={false}>
              <div className={styles['DnDSelection__draggable-container']}>
                {searchedDraggableItems.map((draggableItem) => {
                  const isDraggableItemSelected = !!selectedDraggableItemsHashMap[draggableItem.indexValue];

                  return (
                    <DraggableDnDItem
                      {...draggableItem}
                      indexValue={null}
                      key={draggableItem.indexValue}
                      onDragChange={(isDragged) => {
                        if (isDragged && !isDraggableItemSelected) setSelectedDraggableItems([]);

                        singleSelectedDraggableItem.current = !isDraggableItemSelected ? draggableItem : null;

                        setDragged(isDragged);
                      }}
                      checkboxChecked={isDraggableItemSelected}
                      selectedAndDragged={isDragged && isDraggableItemSelected}
                      badgeQuantity={selectedDraggableItems.length}
                      showCheckbox
                      draggable
                      onCheckboxToggle={() => {
                        setSelectedDraggableItems(
                          isDraggableItemSelected
                            ? selectedDraggableItems.filter((item) => item.indexValue !== draggableItem.indexValue)
                            : [...selectedDraggableItems, draggableItem]
                        );
                      }}
                    />
                  );
                })}
              </div>
            </Scroll>
          </Card>
        </div>

        <div className={styles['DnDSelection__right-arrow']}>
          <Icons.ArrowRightIcon />
        </div>

        <div className={styles['DnDSelection__card-container']}>
          {sortableSectionTitle && <div className={styles['DnDSelection__title']}>{sortableSectionTitle}</div>}

          <Card
            className={classNames(styles['DnDSelection__card'], {
              [styles['DnDSelection__card--with-top-content']]: !!renderDroppableTopContent
            })}>
            {renderDroppableTopContent && (
              <div className={styles['DnDSelection__droppable-top-content']}>
                {renderDroppableTopContent({
                  setSortableItems
                })}
              </div>
            )}

            <DropPlace
              onDropChange={(isDropped) => {
                if (!isDropped) return;

                if (!droppedItem.current && sortableItems.length) return;

                setSelectedDraggableItems([]);

                const draggableItems = singleSelectedDraggableItem.current
                  ? [singleSelectedDraggableItem.current]
                  : selectedDraggableItems;

                if (!sortableItems.length) {
                  setSortableItems(draggableItems);

                  setDraggableItems((prevDraggableItems) =>
                    prevDraggableItems.filter((item) =>
                      singleSelectedDraggableItem.current
                        ? item.indexValue !== singleSelectedDraggableItem.current.indexValue
                        : !selectedDraggableItemsHashMap[item.indexValue]
                    )
                  );

                  return;
                }

                const droppedIndex = sortableItems.findIndex(
                  (item) => item.indexValue === droppedItem.current.indexValue
                );

                setSortableItems((prevSortableItems) => [
                  ...prevSortableItems.slice(0, droppedIndex + 1),
                  ...draggableItems,
                  ...prevSortableItems.slice(droppedIndex + 1)
                ]);

                setDraggableItems((prevDraggableItems) =>
                  prevDraggableItems.filter((draggableItem) =>
                    singleSelectedDraggableItem.current
                      ? singleSelectedDraggableItem.current.indexValue !== draggableItem.indexValue
                      : !selectedDraggableItemsHashMap[draggableItem.indexValue]
                  )
                );
              }}>
              {sortableItems.length ? (
                <Scroll autoHeightMin={400} showHorizontalScroll={false}>
                  <div className={styles['DnDSelection__droppable-container']}>
                    <SortableList
                      onSortEnd={({ oldIndex, newIndex }) => {
                        setSortableItems((prevItems) => [...arrayMoveMutable(prevItems, oldIndex, newIndex)]);
                      }}>
                      {sortableItems.map((sortableItem, index) => (
                        <SortableDnDItem
                          key={index}
                          {...sortableItem}
                          indexValue={index + 1}
                          dragged={isDragged}
                          index={index}
                          droppable
                          showRemoveButton
                          sortTooltipText={sortTooltipText}
                          sortable
                          onDropChange={(isDropped) => {
                            if (isDropped) droppedItem.current = sortableItem;
                          }}
                          onRemoveButtonClick={() => {
                            setSortableItems((prevSortableItems) =>
                              prevSortableItems.filter((item) => item.indexValue !== sortableItem.indexValue)
                            );

                            if (!sortableItem.notAddToDraggableItems)
                              setDraggableItems((prevDraggableItems) => [sortableItem, ...prevDraggableItems]);
                          }}
                        />
                      ))}
                    </SortableList>
                  </div>
                </Scroll>
              ) : (
                <div className={styles['DnDSelection__empty']}>
                  <div className={styles['DnDSelection__emptyIcon']}>{emptyDroppableIcon}</div>
                  <p className={styles['DnDSelection__emptyText']}>{emptyDroppableText}</p>
                </div>
              )}
            </DropPlace>
          </Card>
        </div>
      </div>
    </DndProvider>
  );
};

export default DnDSelection;
