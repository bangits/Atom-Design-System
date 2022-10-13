import { DnDItem } from '@/components';
import { FC, PropsWithChildren, useMemo } from 'react';
import { SortableContainer, SortableContainerProps, SortableElement } from 'react-sortable-hoc';

export const SortableDnDItem = SortableElement(DnDItem);

const getSortableComponent = ({ axis, helperClass }: SortableContainerProps) =>
  SortableContainer((({ children }) => {
    // TODO: Must be removed to css
    return (
      <div
        className={helperClass}
        style={{ display: 'flex', flexDirection: axis === 'x' || axis === 'xy' ? 'row' : 'column', flexWrap: 'wrap' }}>
        {children}
      </div>
    );
  }) as FC);

export default function SortableList(props: PropsWithChildren<Omit<SortableContainerProps, 'shouldCancelStart'>>) {
  const SortableComponent = useMemo(() => getSortableComponent(props), [props]);

  return (
    <SortableComponent
      {...props}
      shouldCancelStart={(event) => {
        const typedEventTarget = event.target as HTMLElement;

        return !(typedEventTarget.classList.contains('DnD-SortIcon') || !!typedEventTarget.closest('.DnD-SortIcon'));
      }}
    />
  );
}
