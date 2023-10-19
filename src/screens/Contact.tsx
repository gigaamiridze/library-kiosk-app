import React from 'react';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FlexBox, WelcomeSection } from '../components';
import { globalStyles } from '../styles';
import { Routes } from '../constants';

function Contact() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[globalStyles.flex, globalStyles.backgroundWhite]}>
      <FlexBox 
        flexDirection='column' 
        rowGap={40}
      >
        <WelcomeSection 
          smallTitle='All Your Favorite Books In One Place'
          bigTitle='Contact Now'
          backTitle='Back To Home'
          onBack={() => navigation.navigate(Routes.SERVICES)}
        />
      </FlexBox>
    </SafeAreaView>
  )
}

export default Contact;
