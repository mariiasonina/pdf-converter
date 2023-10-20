import DocumentPicker from 'react-native-document-picker';

export const selectFile = async () => {
  try {
    const file = await DocumentPicker.pickSingle({
      presentationStyle: 'fullScreen',
      type: ['images', 'pdf', 'doc', 'docx', 'plainText'],
    });

    return file;
  } catch (err) {
    console.log('Pick file error:', err);
  }
};
