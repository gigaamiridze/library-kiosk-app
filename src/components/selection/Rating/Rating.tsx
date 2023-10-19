import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import RatingIcon from './RatingIcon';

function Rating({ rating = 3.5 }: { rating: number }) {
  return (
    <View style={styles.ratingContainer}>
      {rating >= 1 ? (
        <RatingIcon name='star' />
      ) : rating >= 0.5 ? (
        <RatingIcon name='star-half' />
      ) : (
        <RatingIcon name='star-outline' />
      )}
      {rating >= 2 ? (
        <RatingIcon name='star' />
      ) : rating >= 1.5 ? (
        <RatingIcon name='star-half' />
      ) : (
        <RatingIcon name='star-outline' />
      )}
      {rating >= 3 ? (
        <RatingIcon name='star' />
      ) : rating >= 2.5 ? (
        <RatingIcon name='star-half' />
      ) : (
        <RatingIcon name='star-outline' />
      )}
      {rating >= 4 ? (
        <RatingIcon name='star' />
      ) : rating >= 3.5 ? (
        <RatingIcon name='star-half' />
      ) : (
        <RatingIcon name='star-outline' />
      )}
      {rating >= 5 ? (
        <RatingIcon name='star' />
      ) : rating >= 4.5 ? (
        <RatingIcon name='star-half' />
      ) : (
        <RatingIcon name='star-outline' />
      )}
    </View>
  )
}

export default Rating;
