import React from 'react';
import { Text, TextStyle } from 'react-native';
import { IHeadingProps } from '../../../interfaces';
import { scaleFontSize } from '../../../styles';
import { getFontFamily } from '../../../utils';
import { Fonts } from '../../../constants';
import { styles } from './styles';

function Heading(props: IHeadingProps) {
  const { 
    title, 
    type, 
    color, 
    fontFamily, 
    fontWeight, 
    numberOfLines, 
    lineHeight, 
    letterSpacing, 
    textAlign, 
    textTransform 
  } = props;

  const styleToApply = () => {
    switch (type) {
      case 1:
        return styles.title1;
      case 2:
        return styles.title2;
      case 3:
        return styles.title3;
      case 4:
        return styles.title4;
      case 5:
        return styles.title5;
      case 6:
        return styles.title6;
      default:
        return styles.title3;
    }
  }

  return (
    <Text
      numberOfLines={numberOfLines}
      style={
        [
          styles.title,
          styleToApply(),
          color && { color },
          fontFamily === Fonts.SECONDARY && { fontFamily: getFontFamily(fontFamily, '400') },
          fontFamily && fontWeight && { fontFamily: getFontFamily(fontFamily, fontWeight) },
          fontWeight && { fontWeight },
          lineHeight && { lineHeight: scaleFontSize(lineHeight) },
          letterSpacing && { letterSpacing },
          textAlign && { textAlign },
          textTransform && { textTransform }
        ] as TextStyle
      }
    >
      {title}
    </Text>
  )
}

export default Heading;
