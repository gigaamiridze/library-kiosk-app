import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { IWelcomeSectionProps } from '../../../interfaces';
import { Colors, Fonts } from '../../../constants';
import { globalStyles } from '../../../styles';
import { Heading } from '../../../components';
import { styles } from './styles';

function WelcomeSection(props: IWelcomeSectionProps) {
  const { smallTitle, bigTitle, backTitle, onBack } = props;

  return (
    <View style={[styles.container, globalStyles.paddingHorizontal]}>
      <Heading
        title={`${smallTitle} 📚`}
        type={4}
        fontWeight='600'
        textAlign='center'
        lineHeight={26}
      />
      <Heading
        title={bigTitle}
        type={1}
        fontFamily={Fonts.SECONDARY}
        textAlign='center'
      />
      {backTitle && (
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={onBack}
          style={styles.backButton}
        >
          <Heading
            title={backTitle}
            type={5}
            color={Colors.PURPLE}
            fontWeight='500'
            textAlign='center'
          />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default WelcomeSection;
