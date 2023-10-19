import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../../constants';

function RatingIcon({ name }: { name: string }) {
  return (
    <Ionicons name={name} size={20} color={Colors.ORANGE} />
  )
}

export default RatingIcon;
