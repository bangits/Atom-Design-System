import { calculateRootFontSize } from './calculateRootFontSize';

export const addResizeChangeEvent = () => {
  const onResize = () => {
    setTimeout(() => {
      const fontSize = calculateRootFontSize();

      document.documentElement.style.fontSize = `${fontSize}px`;
    }, 100);
  };

  onResize();

  window.addEventListener('resize', onResize);
};
