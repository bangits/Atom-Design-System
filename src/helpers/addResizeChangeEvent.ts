import { calculateRootFontSize } from './calculateRootFontSize';

export const addResizeChangeEvent = () => {
  const onResize = () => {
    setTimeout(() => {
      const fontSize = calculateRootFontSize();

      const MAX_FONT_SIZE = 10.5;

      document.documentElement.style.fontSize = `${fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize}px`;
    }, 100);
  };

  onResize();

  window.addEventListener('resize', onResize);
};
