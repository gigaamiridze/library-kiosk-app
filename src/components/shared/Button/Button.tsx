import React from 'react';
import { TouchableOpacity } from 'react-native';
import { IButtonProps } from '../../../interfaces';
import { Heading } from '../../../components';
import { Colors } from '../../../constants';
import { styles } from './styles';

function Button(props: IButtonProps) {
  const { title, backgroundColor, titleColor, isDisabled, isSelected, padding, children, onPress } = props;

  const getTitleColor = () => {
    if (isDisabled) return Colors.GAINSBORO;
    if (isSelected) return Colors.WHITE;
    if (titleColor) return titleColor; 
    return Colors.PURPLE;
  }

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      disabled={isDisabled}
      onPress={onPress}
      style={[
        styles.button,
        backgroundColor ? { backgroundColor } : null,
        padding ? { padding } : null,
        isDisabled && styles.disabledButton,
        isSelected && { backgroundColor: Colors.PURPLE },
      ]}
    >
      {title && (
        <Heading 
          title={title}
          type={6}
          color={getTitleColor()}
        />
      )}
      {children && children}
    </TouchableOpacity>
  )
}

export default Button;
