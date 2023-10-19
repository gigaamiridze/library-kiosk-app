import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants';
import { horizontalScale, verticalScale } from '../../../styles';

export const styles = StyleSheet.create({
  cardContainer: {
    width: 220,
    height: 330,
    borderWidth: 2,
    borderColor: Colors.GAINSBORO,
    borderRadius: horizontalScale(15),
  },
  image: {
    width: '100%',
    maxHeight: 220,
    objectFit: 'cover',
    borderTopLeftRadius: horizontalScale(15),
    borderTopRightRadius: horizontalScale(15),
  },
  infoContent: {
    flexDirection: 'column',
    rowGap: verticalScale(15),
    paddingVertical: verticalScale(25),
    paddingHorizontal: verticalScale(25),
  },
});
