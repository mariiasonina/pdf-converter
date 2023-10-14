import React from 'react';
import { Text, Image, TouchableOpacity, View } from 'react-native';
import Dots from '@assets/icons/dots.svg';
import SheetsIcon from '@assets/icons/sheetsIcon.svg';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@src/navigation/StackNavigator';
import { styles } from './styles';

type Props = {
  name: string;
  type: string;
  date: string;
  size: string;
  pagesNumber: number;
};

export const FileItem = ({ name, type, date, size, pagesNumber }: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onPressItem = () => {};

  const onPressSettings = () => {
    navigation.navigate('FileSettings');
  };

  return (
    <TouchableOpacity style={styles.item} activeOpacity={0.6} onPress={onPressItem}>
      <Image
        style={styles.image}
        // TODO: mocked image, need to change
        source={require('@assets/images/document.png')}
      />
      <View>
        <Text style={styles.itemName} numberOfLines={2} ellipsizeMode="tail">
          {name}
        </Text>
        <View style={styles.infoContainer}>
          <Text style={styles.text}>{type}</Text>
          <View style={styles.divider} />
          <Text style={styles.text}>{date}</Text>
          <View style={styles.divider} />
          <Text style={styles.text}>{size}</Text>
        </View>
        <View style={styles.infoContainer}>
          <SheetsIcon />
          <Text style={styles.text}>{pagesNumber}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={onPressSettings}>
        <Dots />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
