import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

type Props = {
  actionName: string;
  icon: React.ReactElement;
  isDivider: boolean;
};

export const FileActionItem = ({ actionName, icon, isDivider }: Props) => {
  const onPressItem = () => {};

  return (
    <TouchableOpacity style={styles.item} activeOpacity={0.6} onPress={onPressItem}>
      {icon}
      <View style={[styles.actionNameContainer, isDivider && styles.line]}>
        <Text style={styles.actionName}>{actionName}</Text>
      </View>
    </TouchableOpacity>
  );
};
