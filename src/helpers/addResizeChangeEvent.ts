import { calculateRootFontSize } from './calculateRootFontSize';

export const addResizeChangeEvent = () => {
  const onResize = () => {
    setTimeout(() => {
      document.documentElement.style.fontSize = `${calculateRootFontSize()}px`;
    }, 100);
  };

  onResize();

  window.addEventListener('resize', onResize);
};
