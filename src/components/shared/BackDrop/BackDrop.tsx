import React, { ReactNode } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

interface IBackDropProps {
  isVisible: boolean;
  children: ReactNode;
  onClose: () => void;
}

function BackDrop(props: IBackDropProps) {
  const { isVisible, children, onClose } = props;

  return (
    <TouchableWithoutFeedback onPress={onClose}>
      <View>
        <Text>BackDrop</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default BackDrop;
