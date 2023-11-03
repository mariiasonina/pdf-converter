import React, { useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import MarginItem from '@src/components/MarginItem/MarginItem';
import Slider from '@react-native-community/slider';
import { useAppData } from '@src/context/AppContext';
import { colors } from '@src/global/colors';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@src/navigation/StackNavigator';
import { margins } from './constants';
import { styles } from './styles';

type Props = {
  navigation: NavigationProp<RootStackParamList>;
};

const PDFSettingsScreen = ({ navigation }: Props) => {
  const { changePdfMargin, pdfSettings, changePdfQuality } = useAppData();
  const [margin, setMargin] = useState(pdfSettings.margin);
  const [quality, setQuality] = useState(pdfSettings.quality);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={handleDoneButtonPress}>
          <Text style={styles.headerDoneButton}>Done</Text>
        </Pressable>
      ),
    });
  }, [margin, quality]);

  const handleDoneButtonPress = () => {
    changePdfMargin(margin);
    changePdfQuality(quality);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Quality</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor={colors.blue}
        maximumTrackTintColor={colors.graphite}
        onValueChange={setQuality}
        step={1}
        value={quality}
      />
      <Text style={styles.label}>Margins</Text>
      <View style={styles.marginsContainer}>
        {margins.map(({ key, icon, marginType }) => (
          <MarginItem
            key={key}
            icon={icon}
            marginType={marginType}
            isChecked={margin === marginType}
            onPress={() => setMargin(marginType)}
          />
        ))}
      </View>
    </View>
  );
};

export default PDFSettingsScreen;
