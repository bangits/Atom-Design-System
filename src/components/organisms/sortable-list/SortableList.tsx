import { DnDItem } from '@/components';
import { FC, PropsWithChildren } from 'react';
import { SortableContainer, SortableContainerProps, SortableElement } from 'react-sortable-hoc';

export const SortableDnDItem = SortableElement(DnDItem);

const SortableListComponent: FC = ({ children }) => {
  // TODO: Must be removed to css
  return <div style={{ display: 'flex', flexDirection: 'column' }}>{children}</div>;
};

const SortableComponent = SortableContainer(SortableListComponent);

export default function SortableList(props: PropsWithChildren<Omit<SortableContainerProps, 'shouldCancelStart'>>) {
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
