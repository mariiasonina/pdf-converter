import DocumentPicker from 'react-native-document-picker';

export const selectFile = async () => {
  try {
    const file = await DocumentPicker.pickSingle({
      presentationStyle: 'formSheet',
      // type: ['images', 'pdf', 'doc', 'docx'],
    });

    return file;
  } catch (err) {
    if (!DocumentPicker.isCancel(err)) {
      console.log('Pick file error:', err);
    }
  }
};
