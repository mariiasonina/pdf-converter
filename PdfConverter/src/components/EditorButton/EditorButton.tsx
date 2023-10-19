import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type Props = {
  text: string;
  onPress: (() => void) | undefined;
};

const EditorButton = ({ text, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.actionButtonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default EditorButton;
