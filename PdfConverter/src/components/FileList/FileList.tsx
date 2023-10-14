import React from 'react';
import { ScrollView } from 'react-native';
import { FileItem } from '@components/FileItem/FileItem';
import { styles } from "./styles";

const mockFiles = [
  { key: 0, name: 'name', type: 'pdf', date: '09.09.2023', size: '143 KB', pagesNumber: 2 },
  { key: 1, name: 'name', type: 'pdf', date: '09.09.2023', size: '143 KB', pagesNumber: 2 },
  { key: 3, name: 'name', type: 'pdf', date: '09.09.2023', size: '143 KB', pagesNumber: 2 },
  { key: 4, name: 'name', type: 'pdf', date: '09.09.2023', size: '143 KB', pagesNumber: 2 },
  { key: 5, name: 'name', type: 'pdf', date: '09.09.2023', size: '143 KB', pagesNumber: 2 },
  { key: 6, name: 'name', type: 'pdf', date: '09.09.2023', size: '143 KB', pagesNumber: 2 },
];

const FileList = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {mockFiles.map(file => (
        <FileItem {...file} />
      ))}
    </ScrollView>
  );
};

export default FileList;
