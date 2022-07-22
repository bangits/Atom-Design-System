import { Card, Icons, Scroll } from '@my-ui/core';
import React, { FC, ReactNode, useMemo, useRef, useState } from 'react';
import FooterContent from './DnDFooterItem';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DnDSelectionItem, DnDSelectionProps } from '../dnd-selection/DnDSelection';
import DropPlace from '../dnd-selection/DropPlace';

export interface DnDFooterContentProps {
  data: {
    editClick: () => void;
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
  }[];
}

const DnDFooterContent: FC<DnDFooterContentProps> = ({ data }) => {
  const [selectedDraggableItems, setSelectedDraggableItems] = useState<DnDSelectionProps['draggableItems']>([]);
  const droppedItem = useRef<DnDSelectionItem>(null);
  const [draggableItems, setDraggableItems] = useState([]);

  const singleSelectedDraggableItem = useRef<DnDSelectionItem>(null);

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

  return (
    <DndProvider backend={HTML5Backend}>
      {data.map((item, index) => {
        const isDraggableItemSelected = !!selectedDraggableItemsHashMap[item.index];

        return (
          <FooterContent
            {...item}
            dragged={isDragged}
            indexValue={null}
            key={item.index}
            onDragChange={(isDragged) => {
              if (isDragged && !isDraggableItemSelected) setSelectedDraggableItems([]);

              // singleSelectedDraggableItem.current = !isDraggableItemSelected ? item : null;
              setDragged(isDragged);
            }}
            editClick={item.editClick}
            selectedAndDragged={isDragged && isDraggableItemSelected}
            draggable
            noDataText='Not Completed'
            footerPages={{
              index: index + 1,
              title: item.title,
              groupTitle: item.groupTitle,
              groupTitleLabel: item.groupTitleLabel,
              pages: item.pages
            }}
          />
        );
      })}
      <Card>
        <DropPlace
          onDropChange={(isDropped) => {
            if (!isDropped) return;

            if (!droppedItem.current) return;

            setSelectedDraggableItems([]);

            const draggableItems = singleSelectedDraggableItem.current
              ? [singleSelectedDraggableItem.current]
              : selectedDraggableItems;

            setDraggableItems((prevDraggableItems) =>
              prevDraggableItems.filter((draggableItem) =>
                singleSelectedDraggableItem.current
                  ? singleSelectedDraggableItem.current.indexValue !== draggableItem.indexValue
                  : !selectedDraggableItemsHashMap[draggableItem.indexValue]
              )
            );
          }}>
          {/* <Scroll autoHeightMin={400} showHorizontalScroll={false}>
            <div >
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
          </Scroll> */}
        </DropPlace>
      </Card>
    </DndProvider>
  );
};

export default DnDFooterContent;
