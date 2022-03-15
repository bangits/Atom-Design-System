import { typedMemo } from '@/helpers';
import { Dialog, DialogProps, useStyles } from '@my-ui/core';
import { FC, useEffect, useRef } from 'react';

export interface DialogViewProps extends DialogProps {
  containerWidth: number;
  yPosition: number;
  xPosition: number;
}

const DialogView: FC<DialogViewProps> = ({ children, containerWidth, yPosition, xPosition, ...dialogProps }) => {
  const containerHeight = 205;

  const memoizedPositions = useRef<{ x: number; y: number }>(null);

  const dialogViewClasses = useStyles(
    {
      root: {
        position: 'fixed',
        top: (data) => (window.innerHeight > data.containerHeight + data.yPosition ? data.yPosition : 'initial'),
        bottom: (data) => (window.innerHeight > data.containerHeight + data.yPosition ? 'initial' : 0),
        maxWidth: (data) => data.containerWidth,
        textAlign: 'left',
        padding: 0,
        transform: 'translateY(0)',
        minHeight: 'initial',
        left: (data) => data.xPosition
      }
    },
    {
      containerWidth,
      yPosition: yPosition || memoizedPositions.current?.y,
      xPosition: xPosition || memoizedPositions.current?.x,
      containerHeight
    }
  );

  useEffect(() => {
    if (yPosition || xPosition)
      memoizedPositions.current = {
        y: yPosition,
        x: xPosition
      };
  }, [yPosition, xPosition]);

  return (
    <Dialog {...dialogProps} className={dialogViewClasses.root}>
      {children}
    </Dialog>
  );
};

export default typedMemo(DialogView);
