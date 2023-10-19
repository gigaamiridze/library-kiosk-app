import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../../utils';
import { scaleFontSize } from '../../../styles';
import { Fonts, Colors, Sizes } from '../../../constants';

export const styles = StyleSheet.create({
  title: {
    fontFamily: getFontFamily(Fonts.PRIMARY, '500'),
    color: Colors.PRIMARY,
  },
  title1: {
    fontSize: scaleFontSize(Sizes.XX_LARGE - 4),
    lineHeight: scaleFontSize(48),
  },
  title2: {
    fontSize: scaleFontSize(Sizes.X_LARGE),
    lineHeight: scaleFontSize(34),
  },
  title3: {
    fontSize: scaleFontSize(Sizes.LARGE),
    lineHeight: scaleFontSize(22),
  },
  title4: {
    fontSize: scaleFontSize(Sizes.MEDIUM),
    lineHeight: scaleFontSize(20),
  },
  title5: {
    fontSize: scaleFontSize(Sizes.SMALL),
    lineHeight: scaleFontSize(18),
  },
  title6: {
    fontSize: scaleFontSize(Sizes.X_SMALL),
    lineHeight: scaleFontSize(16),
  },
});
