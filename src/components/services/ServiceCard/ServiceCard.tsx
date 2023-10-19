import React from 'react';
import { View, Image } from 'react-native';
import { IServiceCardProps } from '../../../interfaces';
import { Heading, Button } from '../../../components';
import { Colors } from '../../../constants';
import { styles } from './styles';

function ServiceCard(props: IServiceCardProps) {
  const { image, buttonTitle, headingTitle, onPress } = props;

  return (
    <View style={styles.cardContainer}>
      <Image 
        source={image} 
        resizeMode='cover'
        alt={buttonTitle} 
        style={styles.image}
      />
      <Heading 
        title={headingTitle}
        type={6}
        fontWeight='500'
        lineHeight={18}
      />
      <Button 
        title={buttonTitle}
        backgroundColor={Colors.PURPLE}
        titleColor={Colors.WHITE}
        onPress={onPress}
      />
    </View>
  )
}

export default ServiceCard;
