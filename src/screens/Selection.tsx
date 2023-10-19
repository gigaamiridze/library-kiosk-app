import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, SafeAreaView, ScrollView, View, FlatList } from 'react-native';
import { FlexBox, WelcomeSection, Heading, BookCard, Pagination, LoaderButton, LoginModal } from '../components';
import { Colors, Fonts, LibraryActions, Routes } from '../constants';
import { useLibraryContext, useUserContext } from '../contexts';
import { getBooksByCategory } from '../api';
import { globalStyles } from '../styles';
import { useQuery } from 'react-query';
import { IBook } from '../interfaces';
import { showToast } from '../utils';
import { ALERT_TYPE } from 'react-native-alert-notification';

function Selection() {
  const [page, setPage] = useState<number>(0);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [isLoginModalVisible, setLoginModalVisible] = useState<boolean>(false);
  const { libraryState, dispatchLibrary } = useLibraryContext();
  const { userState } = useUserContext();
  const navigation = useNavigation();

  const {
    data: books,
    isLoading,
    isError,
    isFetching,
    isPreviousData,
  } = useQuery(['books', page], () => getBooksByCategory(page, 5, libraryState.selectedCategory), {
    keepPreviousData: true,
    staleTime: 300000, // 5 minutes in milliseconds
    cacheTime: 3600000, // 1 hour in milliseconds
  });

  const handleBookSelection = (book: IBook) => {
    dispatchLibrary({ type: LibraryActions.SELECT_BOOK, payload: {
      id: book.id,
      title: book.volumeInfo.title,
    }});
  };

  const checkBookAndShowModal = () => {
    if (libraryState.selectedBook) {
      setIsDisabled(true);

      const timeoutId = setTimeout(() => {
        if (userState.isAuthenticated) {
          // Confirmation modal set to true TODO:
          setIsDisabled(false);
        } else {
          setLoginModalVisible(true);
          setIsDisabled(false);
        }
      }, 2000);

      return () => clearTimeout(timeoutId);
    } else {
      showToast(ALERT_TYPE.WARNING, 'Warning', 'Please select a book.');
    }
  };

  return (
    <SafeAreaView style={[globalStyles.flex, globalStyles.backgroundWhite]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <FlexBox
          flexDirection='column'
          rowGap={60}
        >
          <WelcomeSection
            smallTitle='Explore your favorite books'
            bigTitle='Selection'
            backTitle='Back To Category Page'
            onBack={() => navigation.navigate(Routes.CATEGORIES)}
          />
          <View style={globalStyles.paddingHorizontal}>
            <FlexBox flexDirection='column' alignItems='center' rowGap={40}>
              <Heading
                title='Select a book'
                type={2}
                fontFamily={Fonts.SECONDARY}
                textAlign='center'
              />
              {isLoading || isFetching ? (
                <ActivityIndicator size='large' color={Colors.PURPLE} />
              ) : isError ? (
                <Heading
                  title='Something went wrong. Please try again.'
                  type={5}
                  fontWeight='500'
                />
              ) : (
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{ columnGap: 20 }}
                  data={books}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => {
                    const { volumeInfo } = item;

                    return (
                      <BookCard
                        title={volumeInfo.title}
                        image={volumeInfo.imageLinks ? volumeInfo.imageLinks.smallThumbnail : undefined}
                        rating={volumeInfo.averageRating}
                        authors={volumeInfo.authors}
                        isSelected={libraryState.selectedBook?.title === volumeInfo.title}
                        onPress={() => handleBookSelection(item)}
                      />
                    )
                  }}
                />
              )}
              <FlexBox flexDirection='row' alignItems='center' columnGap={20}>
                <Pagination
                  data={books}
                  currentPage={page}
                  setcurrentPage={setPage}
                  isPreviousData={isPreviousData}
                  isFetching={isFetching}
                />
                <LoaderButton
                  title='Select'
                  padding={9}
                  isDisabled={isDisabled}
                  onPress={checkBookAndShowModal}
                />
              </FlexBox>
            </FlexBox>
          </View>
          <LoginModal 
            isVisible={isLoginModalVisible}
            animationType='slide'
            onSuccess={() => {}}
            onClose={() => setLoginModalVisible(false)}
          />
        </FlexBox>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Selection;
