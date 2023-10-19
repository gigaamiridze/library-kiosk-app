import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, TouchableOpacity, View, Linking } from 'react-native';
import { FlexBox, Heading, WelcomeSection, Button } from '../components';
import { Colors, Fonts, Routes } from '../constants';
import { globalStyles } from '../styles';

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
        <View style={globalStyles.paddingHorizontal}>
          <FlexBox flexDirection='column' alignItems='center' rowGap={50}>
            <FlexBox flexDirection='column' alignItems='center' rowGap={20}>
              <Heading
                title='Contact Us'
                type={2}
                fontFamily={Fonts.SECONDARY}
              />
              <FlexBox flexDirection='column' rowGap={10}>
                <FlexBox flexDirection='row' alignItems='center' columnGap={5}>
                  <Heading
                    title='Phone:'
                    type={3}
                    fontFamily={Fonts.SECONDARY}
                  />
                  <TouchableOpacity onPress={() => Linking.openURL('tel:+995-555-77-55-77')}>
                    <Heading
                      title='+995 555 77 55 77'
                      type={3}
                      fontFamily={Fonts.SECONDARY}
                    />
                  </TouchableOpacity>
                </FlexBox>
                <FlexBox flexDirection='row' alignItems='center' columnGap={5}>
                  <Heading
                    title='E-mail:'
                    type={3}
                    fontFamily={Fonts.SECONDARY}
                  />
                  <TouchableOpacity onPress={() => Linking.openURL('mailto:contact.books@gmail.com')}>
                    <Heading
                      title='contact.books@gmail.com'
                      type={3}
                      fontFamily={Fonts.SECONDARY}
                    />
                  </TouchableOpacity>
                </FlexBox>
                <Heading
                  title='Address: Georgia, Tbilisi'
                  type={3}
                  fontFamily={Fonts.SECONDARY}
                />
              </FlexBox>
            </FlexBox>
            <FlexBox flexDirection='column' alignItems='center' rowGap={20}>
              <Heading
                title='Follow Us'
                type={2}
                fontFamily={Fonts.SECONDARY}
              />
              <FlexBox flexDirection='row' alignItems='center' columnGap={10}>
                <Button backgroundColor={Colors.PURPLE}>
                  <Ionicons name='logo-linkedin' size={20} color={Colors.WHITE} />
                </Button>
                <Button backgroundColor={Colors.PURPLE}>
                  <Ionicons name='logo-twitter' size={20} color={Colors.WHITE} />
                </Button>
                <Button backgroundColor={Colors.PURPLE}>
                  <Ionicons name='logo-facebook' size={20} color={Colors.WHITE} />
                </Button>
                <Button backgroundColor={Colors.PURPLE}>
                  <Ionicons name='logo-instagram' size={20} color={Colors.WHITE} />
                </Button>
              </FlexBox>
            </FlexBox>
          </FlexBox>
        </View>
      </FlexBox>
    </SafeAreaView>
  )
}

export default Contact;
