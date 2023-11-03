import React from 'react';
import { View, Text, Pressable } from 'react-native';
import TickIcon from '@assets/icons/tickIconWhite.svg';
import { MarginType } from '@src/context/types';
import { styles } from "./styles";

type Props = {
  marginType: MarginType;
  isChecked: boolean;
  onPress: () => void;
  icon: React.ReactElement;
};

const MarginItem = ({ marginType, isChecked, onPress, icon }: Props) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      {icon}
      <Text style={styles.text}>{marginType}</Text>
      {isChecked ? <TickIcon /> : <View style={styles.circle}></View>}
    </Pressable>
  );
};

export default MarginItem;
