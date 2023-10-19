import { StyleSheet } from 'react-native';
import { verticalScale } from '../../../styles';
import { Colors } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.FLASH_WHITE,
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: verticalScale(30),
    paddingVertical: verticalScale(60),
  },
  backButton: {
    marginTop: 5,
  },
});
