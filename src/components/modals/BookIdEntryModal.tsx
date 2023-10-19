import React, { useState } from 'react';
import { Modal, View } from 'react-native';
import { ALERT_TYPE } from 'react-native-alert-notification';
import { Button, FlexBox, Heading, Input, LoaderButton } from '../../components';
import { removeWhitespaces, showToast } from '../../utils';
import { IBookIdEntryModalProps } from '../../interfaces';
import { useLibraryContext } from '../../contexts';
import { Colors } from '../../constants';
import { styles } from './styles';

function BookIdEntryModal(props: IBookIdEntryModalProps) {
  const [bookId, setBookId] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const { isVisible, animationType, onClose, onConfirm } = props;
  const { libraryState } = useLibraryContext();

  const handleConfirm = () => {
    if (!bookId) {
      return showToast(ALERT_TYPE.DANGER, 'Error', 'Book ID field is required.');
    }

    if (bookId === libraryState.selectedBook?.id) {
      setIsDisabled(true);
      showToast(ALERT_TYPE.SUCCESS, 'Success', 'Book ID is correct. thank you!');

      const timeoutId = setTimeout(() => {
        onConfirm();
      }, 2000);

      return () => clearTimeout(timeoutId);
    } else {
      showToast(ALERT_TYPE.DANGER, 'Error', 'Invalid Book ID. Please check and try again.');
    }
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
            title='Return a book'
            type={3}
            fontWeight='700'
            textAlign='center'
          />
          <Input
            placeholder='Enter Book ID'
            iconType='bookId'
            onChangeText={(value) => setBookId(removeWhitespaces(value))}
          />
          <FlexBox flexDirection='row' alignItems='center' columnGap={10}>
            <LoaderButton
              title='Confirm'
              isDisabled={isDisabled}
              onPress={handleConfirm}
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

export default BookIdEntryModal;
