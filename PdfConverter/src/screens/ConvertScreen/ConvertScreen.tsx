import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import ConvertSettingsItem from '@src/components/ConvertSettingsItem/ConvertSettingsItem';
import ContentItemsContainer from '@src/components/ContentItemsContainer/ContentItemsContainer';
import { sourceItems } from './constants';
import { styles } from './styles';

const ConvertScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.itemsContainer}>
        <ContentItemsContainer labelText="Original File" content={sourceItems} />
        <ConvertSettingsItem label="Convert to" name=".pdf" />
        <ConvertSettingsItem label="PDF Settings" name="Quality: 90%, Margins: None" withArrow />
        <ConvertSettingsItem label="Name" name="FileName" />
      </ScrollView>
      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Convert</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConvertScreen;
