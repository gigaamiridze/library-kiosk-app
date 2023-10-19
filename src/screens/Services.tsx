import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ALERT_TYPE } from 'react-native-alert-notification';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { FlexBox, WelcomeSection, Heading, ServiceCard, BookIdEntryModal, LoginModal, ConfirmationModal } from '../components';
import { Fonts, LibraryActions, Routes } from '../constants';
import { useLibraryContext } from '../contexts';
import { globalStyles } from '../styles';
import { showToast } from '../utils';
import { images } from '../assets';

function Services() {
  const navigation = useNavigation();
  const [isLoginModalVisible, setLoginModalVisible] = useState<boolean>(false);
  const [isBookIdModalVisible, setBookIdModalVisible] = useState<boolean>(false);
  const [isConfirmationModalVisible, setConfirmationModalVisible] = useState<boolean>(false);
  const { libraryState, dispatchLibrary } = useLibraryContext();

  const handleReturnBookButtonPress = () => {
    if (!libraryState.selectedBook?.id) {
      showToast(ALERT_TYPE.WARNING, 'Info', "You haven't borrowed a book yet, please borrow a book.");
    } else {
      setBookIdModalVisible(true);
    }
  };

  const handleConfirmationModalConfirm = () => {
    dispatchLibrary({ type: LibraryActions.RETURN_SUCCESS });

    const timeoutId = setTimeout(() => {
      setConfirmationModalVisible(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  };

  return (
    <SafeAreaView style={[globalStyles.flex, globalStyles.backgroundWhite]}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 90 }}
      >
        <FlexBox
          flexDirection='column'
          rowGap={60}
        >
          <WelcomeSection
            smallTitle='All Your Favorite Books In One Place'
            bigTitle='Largest Digital Library Of Bestselling eBooks'
          />
          <View style={globalStyles.paddingHorizontal}>
            <FlexBox flexDirection='column' rowGap={40}>
              <Heading
                title='Main Services'
                type={2}
                fontFamily={Fonts.SECONDARY}
                textAlign='center'
              />
              <ServiceCard
                image={images.borrowBook}
                headingTitle='Explore, borrow, enjoy. Dive into a world of stories with our easy book borrowing service.'
                buttonTitle='Borrow a Book'
                onPress={() => navigation.navigate(Routes.CATEGORIES)}
              />
              <ServiceCard
                image={images.returnBook}
                headingTitle='Complete the journey. Return your borrowed books hassle-free and share the reading joy.'
                buttonTitle='Return a Book'
                onPress={handleReturnBookButtonPress}
              />
            </FlexBox>
          </View>
          <BookIdEntryModal 
            isVisible={isBookIdModalVisible}
            animationType='slide'
            onClose={() => setBookIdModalVisible(false)}
            onConfirm={() => {
              setBookIdModalVisible(false);
              setLoginModalVisible(true);
            }}
          />
          <LoginModal 
            isVisible={isLoginModalVisible}
            animationType='slide'
            onSuccess={() => setConfirmationModalVisible(true)}
            onClose={() => setLoginModalVisible(false)}
          />
          <ConfirmationModal 
            type='return'
            isVisible={isConfirmationModalVisible}
            animationType='slide'
            onConfirm={handleConfirmationModalConfirm}
          />
        </FlexBox>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Services;
