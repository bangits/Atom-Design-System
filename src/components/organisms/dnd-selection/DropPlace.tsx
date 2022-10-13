import { FC, PropsWithChildren, useEffect } from 'react';
import { useDrop } from 'react-dnd';

export interface DropPlaceProps {
  onDropChange?(isDropped: boolean): void;
}

const DropPlace: FC<PropsWithChildren<DropPlaceProps>> = ({ children, onDropChange }) => {
  const [{ isDropped }, drop] = useDrop(() => ({
    accept: 'DraggableDnDItem',
    collect: (monitor) => ({
      isDropped: monitor.didDrop()
    })
  }));

  useEffect(() => {
    onDropChange?.(isDropped);
  }, [isDropped]);

  return (
    <div ref={drop} style={{ width: '100%', height: '100%' }}>
      {children}
    </div>
  );
};

export default DropPlace;
