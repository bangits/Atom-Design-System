import { useEffect, useRef } from 'react';

export const useResizeObserver = (element: HTMLElement, listener: () => void) => {
  // TODO: Check why resizeObserver not working
  // const resizeObserver = new ResizeObserver(listener);

  const elementWidthRef = useRef(element?.scrollWidth || 0);

  useEffect(() => {
    if (!element) return;

    const intervalId = setInterval(() => {
      if (elementWidthRef.current !== element.scrollWidth) listener();

      elementWidthRef.current = element.scrollWidth;
    }, 300);

    // resizeObserver.observe(element);

    // return () => resizeObserver.disconnect();
    return () => clearInterval(intervalId);
  }, [element]);
};
