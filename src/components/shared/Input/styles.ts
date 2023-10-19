import { StyleSheet } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../constants';
import { horizontalScale, verticalScale, scaleFontSize } from '../../../styles';

export const styles = StyleSheet.create({
  fieldGroup: {
    height: 40,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.CADET_BLUE,
    borderRadius: horizontalScale(7),
    paddingHorizontal: horizontalScale(5),
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: verticalScale(5),
  },
  input: {
    flex: 1,
    height: '100%',
    color: Colors.CADET_BLUE,
    fontFamily: Fonts.PRIMARY,
    fontSize: scaleFontSize(Sizes.X_SMALL),
  },
  icon: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
