import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../styles';
import { Colors } from '../../constants';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.BACKDROP,
  },
  modalContent: {
    width: '88%',
    backgroundColor: Colors.WHITE,
    borderRadius: horizontalScale(20),
    paddingVertical: verticalScale(40),
    paddingHorizontal: horizontalScale(20),
    flexDirection: 'column',
    rowGap: horizontalScale(20),
  },
});
