import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { InputProps } from '../../../interfaces';
import { Colors } from '../../../constants';
import { styles } from './styles';

function Input(props: InputProps) {
  const { placeholder, iconType, secureTextEntry, keyboardType, onChangeText } = props;
  const [value, setValue] = useState<string>('');

  const getIcon = () => {
    switch (iconType) {
      case 'username':
        return 'person';
      case 'email':
        return 'mail';
      case 'password':
        return 'lock-closed';
      case 'bookId':
        return 'book';
    }
  }

  return (
    <View style={styles.fieldGroup}>
      <View style={styles.icon}>
        <Ionicons 
          name={getIcon()} 
          size={20} 
          color={Colors.CADET_BLUE} 
        />
      </View>
      <TextInput 
        placeholder={placeholder}
        placeholderTextColor={Colors.CADET_BLUE}
        keyboardType={keyboardType ? keyboardType : 'default'}
        secureTextEntry={secureTextEntry ? secureTextEntry : false}
        style={styles.input}
        value={value}
        onChangeText={(value) => {
          setValue(value);
          onChangeText(value);
        }}
      />
    </View>
  )
}

export default Input;
