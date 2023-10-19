import axios from 'axios';
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { Modal, View } from 'react-native';
import { ALERT_TYPE } from 'react-native-alert-notification';
import { Button, FlexBox, Heading, Input, LoaderButton } from '../../components';
import { Api, Colors, UserActions } from '../../constants';
import { removeWhitespaces, showToast } from '../../utils';
import { ILoginModalProps } from '../../interfaces';
import { useUserContext } from '../../contexts';
import { styles } from './styles';

function LoginModal(props: ILoginModalProps) {
  const { isVisible, animationType, onSuccess, onClose } = props;
  const { dispatchUser } = useUserContext();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const mutation = useMutation(
    async (formData: { username: string; password: string }) => {
      try {
        const { data } = await axios.post(Api.AUTH_URL, formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        return data;
      } catch (error) {
        throw new Error('Invalid credentials.');
      }
    },
    {
      onSuccess: (data) => {
        setIsDisabled(true);
        const { username, email, token } = data;

        dispatchUser({
          type: UserActions.LOGIN_SUCCESS,
          payload: { username, email, token },
        });
        showToast(ALERT_TYPE.SUCCESS, 'Success', "Congratulations! You've successfully logged into your account.");
        
        setTimeout(() => {
          if (onClose) {
            onClose();
          }
          
          if (token) {
            onSuccess();
          }
        }, 2000);
      },
      onError: (error: Error) => {
        showToast(ALERT_TYPE.DANGER, 'Error', error.message);
      },
    }
  );

  const handleLogin = () => {
    if (!username || !password) {
      return showToast(ALERT_TYPE.DANGER, 'Error', 'All fields are required.');
    }

    if (username.length < 4 || username.length > 20) {
      return showToast(ALERT_TYPE.DANGER, 'Error', 'Username must be between 4 and 20 characters.');
    }

    if (password.length < 6 || password.length > 20) {
      return showToast(ALERT_TYPE.DANGER, 'Error', 'Password must be between 8 and 20 characters.');
    }

    mutation.mutate({ username, password });
  };

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
              onPress={handleLogin}
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
