import React, { useState } from 'react';
import { View, ScrollView, TextInput, Text, KeyboardAvoidingView, Platform, useColorScheme } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useHeaderHeight } from '@react-navigation/elements';
import SettingsItem from '@src/components/SettingsItem/SettingsItem';
import ContentItemsContainer from '@src/components/ContentItemsContainer/ContentItemsContainer';
import { Button } from '@src/components/Button/Button';
import { getFileNameWithoutExtension } from '@src/utils/helpers';
import { useScreenDimentions } from '@src/hooks/useDimentions';
import { useAppData } from '@src/context/AppContext';
import { colors } from '@src/global/colors';
import { styles } from './styles';

const ConvertScreen = () => {
  const { height } = useScreenDimentions();
  const colorScheme = useColorScheme();
  const { filesToConvert } = useAppData();
  const headerHeight = useHeaderHeight();
  const insets = useSafeAreaInsets();
  const [fileName, setFileName] = useState(getFileNameWithoutExtension(filesToConvert[0].name));
  const isImageType = filesToConvert.some(image => image.type.includes('image'));
  const inputAccessoryViewID = 'uniqueID';

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={headerHeight}>
        <ScrollView style={styles.scrollView}>
          <ContentItemsContainer labelText="Original File" content={filesToConvert} isImageType={isImageType} />
          <SettingsItem label="Convert to" name=".pdf" onPress={() => {}} withArrow={!isImageType} />
          <SettingsItem label="PDF Settings" name="Quality: 90%, Margins: None" withArrow onPress={() => {}} />
          <Text style={styles.label}>Name</Text>
          <View style={[styles.inputContainer, colorScheme === 'light' && { backgroundColor: colors.lightGrey }]}>
            <TextInput
              style={[styles.input, colorScheme === 'light' && { color: colors.blackSecondary }]}
              placeholder="Document Name"
              value={fileName}
              onChangeText={setFileName}
              clearButtonMode="while-editing"
              inputAccessoryViewID={inputAccessoryViewID}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <Button buttonText="convert" onPress={() => {}} buttonStyle={styles.button} />
    </View>
  );
};

export default ConvertScreen;
