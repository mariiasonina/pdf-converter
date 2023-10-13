import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MainContainer } from '@src/components/MainContainer/MainContainer';
import LetterH from '@assets/images/letterH.svg';

const HistoryScreen = () => {
  return <MainContainer firstHeaderLetter={<LetterH />} headerText="istory"></MainContainer>;
};

export default HistoryScreen;
