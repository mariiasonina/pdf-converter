import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SignatureIcon from '@assets/icons/signatureIcon.svg';
import LetterS from '@assets/images/letterS.svg';
import { MainContainer } from '@src/components/MainContainer/MainContainer';
import SettingsItem from '@src/components/SettingsItem/SettingsItem';
import ContentItemsContainer from '@src/components/ContentItemsContainer/ContentItemsContainer';
import { aboutItems } from './constants';
import { styles } from './styles';

const SettingsScreen = () => {
  return (
    <MainContainer firstHeaderLetter={<LetterS />} headerText="ettings" padding>
      <View style={styles.upgradeBlock}>
        <View>
          <Text style={styles.boldText}>Upgrade to Premium</Text>
          <Text style={styles.text}>Unlock privileges</Text>
        </View>
        <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => {}}>
          <Text style={styles.buttonText}>Try it out</Text>
        </TouchableOpacity>
      </View>
      <SettingsItem label="Settings" name="Signature" icon={<SignatureIcon />} withArrow onPress={() => {}} />
      <ContentItemsContainer labelText="About" content={aboutItems} />
    </MainContainer>
  );
};

export default SettingsScreen;
