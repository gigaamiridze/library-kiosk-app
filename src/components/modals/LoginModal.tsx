import React, { useState } from 'react';
import { Modal, View } from 'react-native';
import { Button, FlexBox, Heading, Input, LoaderButton } from '../../components';
import { ILoginModalProps } from '../../interfaces';
import { useUserContext } from '../../contexts';
import { removeWhitespaces } from '../../utils';
import { styles } from './styles';
import { Colors } from '../../constants';

function LoginModal(props: ILoginModalProps) {
  const { isVisible, animationType, onSuccess, onClose } = props;
  const { dispatchUser } = useUserContext();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

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
          <FlexBox flexDirection='column' rowGap={20}>
            <Input 
              placeholder='Enter your username'
              iconType='username'
              onChangeText={(value) => setUsername(removeWhitespaces(value))}
            />
            <Input 
              placeholder='Enter your password'
              iconType='password'
              secureTextEntry={true}
              onChangeText={(value) => setPassword(removeWhitespaces(value))}
            />
          </FlexBox>
          <FlexBox flexDirection='row' alignItems='center' columnGap={10}>
            <LoaderButton 
              title='Login'
              isDisabled={isDisabled}
              onPress={() => {}}
            />
            <Button 
              title='Cancel'
              backgroundColor={Colors.PURPLE}
              titleColor={Colors.WHITE}
              onPress={onClose}
            />
          </FlexBox>
        </View>
      </View>
    </Modal>
  )
}

export default LoginModal;
