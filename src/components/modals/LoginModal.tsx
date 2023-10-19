import React from 'react';
import { Modal, View } from 'react-native';
import { ILoginModalProps } from '../../interfaces';
import { Heading } from '../../components';
import { styles } from './styles';

function LoginModal(props: ILoginModalProps) {
  const { isVisible, animationType, onSuccess, onClose } = props;

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType={animationType}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Heading 
            title='Login to your account'
            type={3}
            fontWeight='700'
            textAlign='center'
          />
        </View>
      </View>
    </Modal>
  )
}

export default LoginModal;
