import { BASE_DEVICE_WIDTH, BASE_FONT_SIZE } from '../constants';

export const calculateRootFontSize = () => window.innerWidth / (BASE_DEVICE_WIDTH / BASE_FONT_SIZE);
