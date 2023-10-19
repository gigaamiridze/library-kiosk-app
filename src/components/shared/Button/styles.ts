import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants';
import { horizontalScale } from '../../../styles';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.PURPLE,
    borderRadius: horizontalScale(8),
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: horizontalScale(8),
  },
  disabledButton: {
    backgroundColor: Colors.WHITE,
    borderColor: Colors.GAINSBORO,
  },
});
