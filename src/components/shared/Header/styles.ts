import { StyleSheet } from 'react-native';
import { verticalScale, horizontalScale } from '../../../styles';
import { Colors } from '../../../constants';

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.FLASH_WHITE,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: Colors.GAINSBORO,
    paddingVertical: verticalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: horizontalScale(170),
    height: verticalScale(45),
  },
});
