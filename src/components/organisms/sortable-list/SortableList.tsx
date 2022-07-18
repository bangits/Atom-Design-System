import { DnDItem } from '@/atom-design-system';
import { FC, PropsWithChildren } from 'react';
import { SortableContainer, SortableContainerProps, SortableElement } from 'react-sortable-hoc';

export const SortableDnDItem = SortableElement(DnDItem);

const SortableListComponent: FC = ({ children }) => {
  return <div>{children}</div>;
};

export default function SortableList(props: PropsWithChildren<Omit<SortableContainerProps, 'shouldCancelStart'>>) {
  const SortableComponent = SortableContainer(SortableListComponent);

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
