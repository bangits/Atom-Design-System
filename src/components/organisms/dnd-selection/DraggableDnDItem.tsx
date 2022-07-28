import { DnDItem, DnDItemProps } from '@/components';
import { FC } from 'react';
import { useDrag } from 'react-dnd';

const DraggableDnDItem: FC<DnDItemProps> = (props) => {
  const [_, dragRef] = useDrag(
    () => ({
      type: 'DraggableDnDItem'
    }),
    []
  );

  return <DnDItem {...props} ref={dragRef} />;
};

export default DraggableDnDItem;
