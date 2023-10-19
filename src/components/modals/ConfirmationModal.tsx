import React, { useState } from 'react';
import { Modal, View } from 'react-native';
import { useLibraryContext, useUserContext } from '../../contexts';
import { FlexBox, Heading, LoaderButton } from '../../components';
import { IConfirmationModalProps } from '../../interfaces';
import { styles } from './styles';

function ConfirmationModal(props: IConfirmationModalProps) {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const { isVisible, type, animationType, onConfirm } = props;
  const { libraryState } = useLibraryContext();
  const { userState } = useUserContext();

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType={animationType}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Heading
            title={`${type === 'borrow' ? 'Borrow' : 'Return'} Confirmation`}
            type={3}
            fontWeight='700'
            textAlign='center'
          />
          <FlexBox flexDirection='column' rowGap={25}>
            <Heading
              title={`Dear ${userState.username},`}
              type={5}
              fontWeight='600'
            />
            <Heading
              title={`Thank you for ${type === 'borrow' ? `borrowing the book "${libraryState.selectedBook?.title}"` : 'returning book'}. Your request has been successfully processed.`}
              type={5}
              fontWeight='600'
              lineHeight={22}
            />
            <FlexBox flexDirection='column' rowGap={10}>
              <Heading
                title={`${type === 'borrow' ? 'Happy Reading!' : 'Good Luck!'}`}
                type={5}
                fontWeight='600'
              />
              <Heading
                title='Kiosk Library.'
                type={5}
                fontWeight='600'
              />
            </FlexBox>
          </FlexBox>
          <LoaderButton
            title='OK'
            isDisabled={isDisabled}
            onPress={() => {
              setIsDisabled(true);
              onConfirm();
            }}
          />
        </View>
      </View>
    </Modal>
  )
}

export default ConfirmationModal;
