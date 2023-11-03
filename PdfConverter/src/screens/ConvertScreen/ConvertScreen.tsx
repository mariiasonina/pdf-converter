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
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@src/navigation/StackNavigator';
import { convertImageToPDF, convertTextToPDF } from '@src/utils/convertHelpers';
import { styles } from './styles';

type Props = {
  navigation: NavigationProp<RootStackParamList>;
};

const ConvertScreen = ({ navigation }: Props) => {
  const { height } = useScreenDimentions();
  const colorScheme = useColorScheme();
  const { filesToConvert, pdfSettings } = useAppData();
  const headerHeight = useHeaderHeight();
  const insets = useSafeAreaInsets();
  const [fileName, setFileName] = useState(getFileNameWithoutExtension(filesToConvert[0].name));
  const isImageType = filesToConvert.some(image => image.type.includes('image'));
  const isTextType = filesToConvert[0].type.includes('text');

  const onPressConvert = async () => {
    let padding;
    let convertedFile;

    if (pdfSettings.margin === 'Normal') {
      padding = 30;
    } else if (pdfSettings.margin === 'None') {
      padding = 0;
    }

    if (isImageType) {
      convertedFile = await convertImageToPDF(filesToConvert, fileName, padding);
    } else if (isTextType) {
      convertedFile = await convertTextToPDF(filesToConvert[0].uri, fileName, padding);
    }

    if (convertedFile?.filePath) {
      navigation.navigate('PDFView', { uri: convertedFile.filePath });
    }
    console.log(convertedFile);
  };

  const goToPdfSettings = () => {
    navigation.navigate('PDFSettings');
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        // keyboardVerticalOffset={headerHeight + 100}
      >
        <ScrollView style={styles.scrollView}>
          <ContentItemsContainer labelText="Original File" content={filesToConvert} isImageType={isImageType} />
          <SettingsItem label="Convert to" name=".pdf" onPress={() => {}} withArrow={!isImageType} />
          <SettingsItem
            label="PDF Settings"
            name={`Quality: ${pdfSettings.quality}%, Margins: ${pdfSettings.margin}`}
            withArrow
            onPress={goToPdfSettings}
          />
          <Text style={styles.label}>Name</Text>
          <View style={[styles.inputContainer, colorScheme === 'light' && { backgroundColor: colors.lightGrey }]}>
            <TextInput
              style={[styles.input, colorScheme === 'light' && { color: colors.blackSecondary }]}
              placeholder="Document Name"
              value={fileName}
              onChangeText={setFileName}
              clearButtonMode="while-editing"
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <Button buttonText="convert" onPress={onPressConvert} buttonStyle={styles.button} />
    </View>
  );
};

export default ConvertScreen;
