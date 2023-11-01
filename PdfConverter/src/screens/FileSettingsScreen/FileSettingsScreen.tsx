import React from 'react';
import { View, Text } from 'react-native';
import { sharedStyles } from '@src/global/sharedStyles';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@src/navigation/StackNavigator';
import CloseButton from "@src/components/CloseButton/CloseButton";
import FileActionList from '@src/components/FileActionList/FileActionList';
import { styles } from './styles';

type Props = {
  route: RouteProp<RootStackParamList, 'FileSettings'>;
};

const FileSettingsScreen = ({ route }: Props) => {
  const { name, type, date } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.itemName} numberOfLines={2} ellipsizeMode="tail">
            {name}
          </Text>
          <View style={styles.infoContainer}>
            <Text style={styles.text}>{type}</Text>
            <View style={sharedStyles.divider} />
            <Text style={styles.text}>modified</Text>
            <Text style={styles.text}>{date}</Text>
          </View>
        </View>
        <CloseButton />
      </View>
      <FileActionList />
    </View>
  );
};

export default FileSettingsScreen;
