import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MainContainer } from '@src/components/MainContainer/MainContainer';
import LetterH from '@assets/images/letterH.svg';
import EmptyHistory from '@src/components/EmptyHistory/EmptyHistory';

const HistoryScreen = () => {
  return (
    <MainContainer firstHeaderLetter={<LetterH />} headerText="istory">
      <EmptyHistory />
    </MainContainer>
  );
};

export default HistoryScreen;
