import { typedMemo } from '@/helpers';
import { Dialog, DialogProps, useStyles } from '@my-ui/core';
import { FC, useEffect, useRef } from 'react';

export interface DialogViewProps extends DialogProps {
  containerWidth: number;
  yPosition: number;
}

const DialogView: FC<DialogViewProps> = ({ children, containerWidth, yPosition, ...dialogProps }) => {
  const containerHeight = 205;

  const memoizedYPosition = useRef<number>(null);

  const dialogViewClasses = useStyles(
    {
      root: {
        position: 'fixed',
        top: (data) => (window.innerHeight > data.containerHeight + data.yPosition ? data.yPosition : 'initial'),
        bottom: (data) => (window.innerHeight > data.containerHeight + data.yPosition ? 'initial' : 0),
        maxWidth: (data) => data.containerWidth,
        textAlign: 'left',
        padding: 0,
        transform: 'translate(-50%, 0)',
        minHeight: 'initial'
      }
    },
    { containerWidth, yPosition: yPosition || memoizedYPosition.current, containerHeight }
  );

  useEffect(() => {
    if (yPosition) memoizedYPosition.current = yPosition;
  }, [yPosition]);

  return (
    <Dialog {...dialogProps} className={dialogViewClasses.root}>
      {children}
    </Dialog>
  );
};

export default typedMemo(DialogView);
