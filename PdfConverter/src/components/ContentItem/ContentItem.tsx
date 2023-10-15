import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ForwardArrowIcon from '@assets/icons/forwardArrowIcon.svg';
import { styles } from './styles';

type Props = {
  name: string;
  icon?: React.ReactElement;
  withArrow?: boolean;
  paddingHorizontal?: number;
};

const ContentItem = ({ icon, withArrow, name, paddingHorizontal }: Props) => {
  return (
    <TouchableOpacity style={[styles.item, { paddingHorizontal }]} activeOpacity={0.8}>
      {icon}
      <Text style={styles.text}>{name}</Text>
      {withArrow && <ForwardArrowIcon />}
    </TouchableOpacity>
  );
};

export default ContentItem;
