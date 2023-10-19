import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ALERT_TYPE } from 'react-native-alert-notification';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { FlexBox, WelcomeSection, Heading, ServiceCard } from '../components';
import { useLibraryContext } from '../contexts';
import { Fonts, Routes } from '../constants';
import { globalStyles } from '../styles';
import { showToast } from '../utils';
import { images } from '../assets';

function Services() {
  const navigation = useNavigation();
  const { libraryState } = useLibraryContext();

  const handleReturnBookButtonPress = () => {
    if (!libraryState.selectedBook?.id) {
      showToast(ALERT_TYPE.WARNING, 'Borrow a Book', "You haven't borrowed a book yet, please borrow a book.");
    } else {
      // setBookIdModalOpen(true); // TODO:
    }
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
        </FlexBox>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Services;
