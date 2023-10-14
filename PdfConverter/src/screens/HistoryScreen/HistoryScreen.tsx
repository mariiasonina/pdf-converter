import React from 'react';
import { MainContainer } from '@src/components/MainContainer/MainContainer';
import LetterH from '@assets/images/letterH.svg';
import EmptyHistory from '@src/components/EmptyHistory/EmptyHistory';
import FileList from '@src/components/FileList/FileList';

const HistoryScreen = () => {
  return (
    <MainContainer firstHeaderLetter={<LetterH />} headerText="istory">
      {/* <EmptyHistory /> */}
      <FileList />
    </MainContainer>
  );
};

export default HistoryScreen;
