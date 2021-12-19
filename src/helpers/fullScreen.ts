// @ts-nocheck

export const openFullScreen = () => {
  const documentElement = document.documentElement;

  if (document.requestFullscreen) {
    documentElement.requestFullscreen();
  } else if (documentElement.webkitRequestFullscreen) {
    /* Safari */
    documentElement.webkitRequestFullscreen();
  } else if (documentElement.msRequestFullscreen) {
    /* IE11 */
    documentElement.msRequestFullscreen();
  }
};

export const closeFullScreen = () => {
  if (document.cancelFullScreen) {
    document.cancelFullScreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
  }
};
