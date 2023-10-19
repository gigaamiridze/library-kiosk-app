import { StyleSheet } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../constants';
import { horizontalScale, verticalScale, scaleFontSize } from '../../../styles';

export const styles = StyleSheet.create({
  filedGroup: {
    width: '100%',
    height: 50,
    position: 'relative',
  },
  input: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    color: Colors.CADET_BLUE,
    fontFamily: Fonts.PRIMARY,
    fontSize: scaleFontSize(Sizes.X_SMALL),
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.CADET_BLUE,
    borderRadius: horizontalScale(5),
    paddingLeft: verticalScale(50),
    paddingRight: verticalScale(16),
  },
  icon: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 50,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
