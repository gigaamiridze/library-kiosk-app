import { StyleSheet } from 'react-native';
import { Colors, Sizes } from '../constants';
import { horizontalScale } from './scaling';

export const globalStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  backgroundWhite: {
    backgroundColor: Colors.WHITE,
  },
  paddingHorizontal: {
    paddingHorizontal: horizontalScale(Sizes.LARGE),
  },
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: horizontalScale(Sizes.LARGE),
  },
}); 
