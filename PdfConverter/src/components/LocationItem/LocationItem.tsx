import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useScreenDimentions } from '@src/hooks/useDimentions';
import { styles } from "./styles";

type Props = {
  icon: React.ReactElement;
  name: string;
  onPress: () => void;
  color: string;
};

const LocationItem = ({ onPress, icon, name, color }: Props) => {
  const { width } = useScreenDimentions();
  const itemSize = (width - 60) / 2;

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color, width: itemSize, height: itemSize }]}
      activeOpacity={0.8}
      onPress={onPress}>
      {icon}
      <Text style={styles.itemText}>{name}</Text>
    </TouchableOpacity>
  );
};

export default LocationItem;
