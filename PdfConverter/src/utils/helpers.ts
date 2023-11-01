import * as mime from 'react-native-mime-types';

export const getFileName = (fileName: string) => fileName.split('/').pop() || '';
export const getFileNameWithoutExtension = (fileName: string) => fileName.split('.')[0];
export const getFileType = (fileName: string) => mime.lookup(fileName) || '';
export const generateUniqueId = () => {
  const timestamp = new Date().getTime().toString(36);
  const randomString = Math.random().toString(36).substring(2, 5);
  const uniqueId = timestamp + randomString;

  return uniqueId;
};
