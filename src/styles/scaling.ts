import DeviceInfo from 'react-native-device-info';
import { Sizes } from '../constants';

const isSmall = Sizes.WIDTH <= 375 && !DeviceInfo.hasNotch();

const guidelineBaseWidth = () => {
  if (isSmall) {
    return 330;
  }

  return 350;
}

const guidelineBaseHeight = () => {
  if (isSmall) {
    return 550;
  } else if (Sizes.WIDTH > 410) {
    return 620;
  }

  return 680;
}

const guidelineBaseFonts = () => {
  if (Sizes.WIDTH > 410) {
    return 430;
  }

  return 400;
}

const horizontalScale = (size: number) => (Sizes.WIDTH / guidelineBaseWidth()) * size;

const verticalScale = (size: number) => (Sizes.WIDTH / guidelineBaseHeight()) * size;

const scaleFontSize = (size: number) => Math.round((size * Sizes.WIDTH) / guidelineBaseFonts());

export { horizontalScale, verticalScale, scaleFontSize };
