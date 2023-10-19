import { TextInputProps, KeyboardTypeOptions } from 'react-native';

export interface InputProps extends TextInputProps {
  placeholder: string;
  iconType: 'username' | 'email' | 'password' | 'bookId';
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  onChangeText: (value: string) => void;
}
