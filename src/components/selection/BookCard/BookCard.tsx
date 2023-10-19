import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import { Heading, Rating } from '../../../components';
import { IBookCardProps } from '../../../interfaces';
import { Colors } from '../../../constants';
import { images } from '../../../assets';
import { styles } from './styles';

function BookCard(props: IBookCardProps) {
  const { title, image, rating, authors, isSelected, onPress } = props;

  return (
    <TouchableOpacity
      style={[
        styles.cardContainer,
        isSelected && { borderColor: Colors.PURPLE }
      ]}
      activeOpacity={0.5}
      onPress={onPress}
    >
      {/** 
       * This conditional rendering is correct but the Image source isn't working in this case, 
       * I don't know why AzRy. When I render image source with {{ uri: image }} displays 
       * blank space. so I render default book cover image here.
      */}
      {/* {image
        ? (
          <Image 
            source={{ uri: image }} 
            style={styles.image}
            resizeMode='cover' 
            alt={title} 
          />
        )
        : (
          <Image 
            source={images.defaultBookCover} 
            style={styles.image}
            resizeMode='cover' 
            alt='Default Book Cover' 
          />
        )
      } */}
      <Image
        source={images.defaultBookCover}
        style={styles.image}
        resizeMode='cover'
        alt='Default Book Cover'
      />
      <View style={styles.infoContent}>
        <Rating rating={rating} />
        <Heading
          title={title}
          type={4}
          fontWeight='600'
          numberOfLines={1}
        />
        {authors?.length > 0 && (
          <Heading
            title={`By ${authors[0]}`}
            type={5}
            fontWeight='600'
            numberOfLines={1}
          />
        )}
      </View>
    </TouchableOpacity>
  )
}

export default BookCard;
