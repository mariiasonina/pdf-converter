import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LetterS from '@assets/images/letterS.svg';
import { MainContainer } from "@src/components/MainContainer/MainContainer";

const SettingsScreen = () => {
  return <MainContainer firstHeaderLetter={<LetterS />} headerText="ettings"></MainContainer>;
};

export default SettingsScreen;
