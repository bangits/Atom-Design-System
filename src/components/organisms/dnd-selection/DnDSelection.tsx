import { DnDItemProps, Icons, SearchInput } from '@/atom-design-system';
import { arrayMoveMutable } from '@/helpers';
import { Card, IconButton, Scroll, Tooltip } from '@my-ui/core';
import classNames from 'classnames';
import { FC, PropsWithChildren, ReactNode, useMemo, useRef, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { SortableDnDItem, SortableList } from '../sortable-list';
import styles from './DnDSelection.module.scss';
import DraggableDnDItem from './DraggableDnDItem';
import DropPlace from './DropPlace';

export type DnDSelectionItem = PropsWithChildren<Pick<DnDItemProps, 'imgSrc' | 'indexValue'>>;

export interface DnDSelectionProps {
  draggableItems: DnDSelectionItem[];
  initialSortableItems?: DnDSelectionItem[];
  draggableSectionTitle?: ReactNode;
  sortableSectionTitle?: ReactNode;
  onCloseButtonClick?(): void;
  onApplyButtonClick?(draggableItems: DnDSelectionItem[], sortableItems: DnDSelectionItem[]): void;
}

const DnDSelection: FC<DnDSelectionProps> = ({
  draggableItems: initialDraggableItems,
  initialSortableItems,
  onApplyButtonClick,
  onCloseButtonClick,
  draggableSectionTitle,
  sortableSectionTitle
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
      <div className={styles['DnDSelection__buttons']}>
        <Tooltip showEvent='hover'>
          <IconButton
            onClick={() => onApplyButtonClick?.(draggableItems, sortableItems)}
            icon={<Icons.ApplyIcon />}
            type='button'
          />
        </Tooltip>
        <Tooltip showEvent='hover'>
          <IconButton onClick={onCloseButtonClick} icon={<Icons.CloseIcon />} type='button' />
        </Tooltip>
      </div>

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

          <Card className={styles['DnDSelection__card']}>
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
              <Scroll autoHeightMin={400} showHorizontalScroll={false}>
                <div className={styles['DnDSelection__droppable-container']}>
                  <SortableList
                    onSortEnd={({ oldIndex, newIndex }) => {
                      setSortableItems((prevItems) => [...arrayMoveMutable(prevItems, oldIndex, newIndex)]);
                    }}>
                    {sortableItems.map((sortableItem, index) => (
                      <SortableDnDItem
                        key={sortableItem.indexValue}
                        {...sortableItem}
                        indexValue={index + 1}
                        dragged={isDragged}
                        index={index}
                        droppable
                        showRemoveButton
                        sortTooltipText='Drag and Drop Banner Position'
                        sortable
                        onDropChange={(isDropped) => {
                          if (isDropped) droppedItem.current = sortableItem;
                        }}
                        onRemoveButtonClick={() => {
                          setSortableItems((prevSortableItems) =>
                            prevSortableItems.filter((item) => item.indexValue !== sortableItem.indexValue)
                          );

                          setDraggableItems((prevDraggableItems) => [sortableItem, ...prevDraggableItems]);
                        }}
                      />
                    ))}
                  </SortableList>
                </div>
              </Scroll>
            </DropPlace>
          </Card>
        </div>
      </div>
    </DndProvider>
  );
};

export default DnDSelection;
