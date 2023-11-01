import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import ForwardArrowIcon from '@assets/icons/forwardArrowIcon.svg';
import { styles } from './styles';

type Props = {
  name: string;
  onPress: () => void;
  icon?: React.ReactElement;
  withArrow?: boolean;
  paddingHorizontal?: number;
};

const ContentItem = ({ icon, withArrow, name, paddingHorizontal, onPress }: Props) => {
  return (
    <TouchableOpacity style={[styles.item, { paddingHorizontal }]} activeOpacity={0.8} onPress={onPress}>
      {icon}
      <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
        {name}
      </Text>
      {withArrow && <ForwardArrowIcon />}
    </TouchableOpacity>
  );
};

export default ContentItem;
