import DocumentPicker from 'react-native-document-picker';

export const selectFile = async () => {
  try {
    const file = await DocumentPicker.pickSingle({
      presentationStyle: 'formSheet',
      type: [
        'public.comma-separated-values-text',
        'com.microsoft.word.doc',
        'org.openxmlformats.wordprocessingml.document',
        'public.image',
        'com.adobe.pdf',
        'public.plain-text',
        'com.microsoft.excel.xls',
        'org.openxmlformats.spreadsheetml.sheet',
        'org.idpf.epub-container',
      ],
    });

    return file;
  } catch (err) {
    if (!DocumentPicker.isCancel(err)) {
      console.log('Pick file error:', err);
    }
  }
};
