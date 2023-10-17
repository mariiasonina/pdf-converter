import React from 'react';
import { Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import CloseIcon from '@assets/icons/closeIcon.svg';
import { styles } from './styles';

const CloseButton = () => {
  const navigation = useNavigation();

  const onPressClose = () => {
    navigation.goBack();
  };

  return (
    <Pressable onPress={onPressClose} style={styles.closeButton}>
      <CloseIcon />
    </Pressable>
  );
};

export default CloseButton;
