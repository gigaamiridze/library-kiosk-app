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
    width: '70%',
    backgroundColor: Colors.WHITE,
    borderRadius: horizontalScale(20),
    paddingVertical: verticalScale(40),
    paddingHorizontal: horizontalScale(30),
    flexDirection: 'column',
    rowGap: 30,
  },
});
