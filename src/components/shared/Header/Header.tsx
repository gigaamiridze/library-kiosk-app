import React from 'react';
import { View, Image } from 'react-native';
import { images } from '../../../assets';
import { styles } from './styles';

function Header() {
  return (
    <View style={styles.headerContainer}>
      <Image 
        source={images.logo}
        resizeMode='cover'
        style={styles.logo} 
      />
    </View>
  )
}

export default Header;
