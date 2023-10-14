import React from 'react';
import { View } from 'react-native';
import { FileActionItem } from '@components/FileActionItem/FileActionItem';
import { fileActions } from './constants';
import { styles } from "./styles";

const FileActionList = () => {
  return (
    <View style={styles.container}>
      {fileActions.map((action, index) => (
        <FileActionItem {...action} isDivider={!!index} />
      ))}
    </View>
  );
};

export default FileActionList;
