import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

export enum Sizes {
  X_SMALL = 14,
  SMALL = 16,
  MEDIUM = 18,
  LARGE = 20,
  X_LARGE = 32,
  XX_LARGE = 44,
  WIDTH = width,
  HEIGHT = height,
}
