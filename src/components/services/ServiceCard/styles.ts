import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../../styles';
import { Colors } from '../../../constants';

export const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    height: 360,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.GAINSBORO,
    borderRadius: horizontalScale(20),
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: verticalScale(30),
    paddingVertical: verticalScale(30),
    paddingHorizontal: horizontalScale(15),
  },
  image: {
    width: '100%',
    maxHeight: verticalScale(350),
    borderRadius: horizontalScale(8),
    objectFit: 'cover',
  },
});
