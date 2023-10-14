import React from 'react';
import { View, Text } from 'react-native';
import EmptyFolderIcon from '@assets/icons/emptyFolderIcon.svg';
import { styles } from "./styles";

const EmptyHistory = () => {
  return (
    <View style={styles.container}>
      <EmptyFolderIcon />
      <Text style={styles.mainText}>There are no converted documents yet.</Text>
      <Text style={styles.text}>Files you’ve converted will appear here.</Text>
    </View>
  );
};

export default EmptyHistory;
