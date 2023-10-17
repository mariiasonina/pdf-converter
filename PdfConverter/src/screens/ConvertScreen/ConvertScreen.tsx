import React from 'react';
import { View, ScrollView } from 'react-native';
import SettingsItem from '@src/components/SettingsItem/SettingsItem';
import ContentItemsContainer from '@src/components/ContentItemsContainer/ContentItemsContainer';
import { Button } from '@src/components/Button/Button';
import { sourceItems } from './constants';
import { styles } from './styles';

const ConvertScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <ContentItemsContainer labelText="Original File" content={sourceItems} />
        <SettingsItem label="Convert to" name=".pdf" onPress={() => {}} />
        <SettingsItem label="PDF Settings" name="Quality: 90%, Margins: None" withArrow onPress={() => {}} />
        <SettingsItem label="Name" name="FileName" onPress={() => {}} />
      </ScrollView>
      <Button buttonText="convert" onPress={() => {}} />
    </View>
  );
};

export default ConvertScreen;
