import { Alert, Image } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import RNFS from 'react-native-fs';
import { useAppData } from '@src/context/AppContext';
import { sharedStyles } from '@src/global/sharedStyles';
import { RootStackParamList } from '@src/navigation/StackNavigator';
import { generateUniqueId, getFileName, getFileType } from '@src/utils/helpers';
import { selectFile } from '@src/utils/selectFile';
import { pickLibraryPictures, pickCameraPicture } from '@src/utils/selectPicture';

export const usePickFiles = (navigation: NavigationProp<RootStackParamList>) => {
  const { addItemToConvert } = useAppData();

  const prepareItemForConversion = (
    fileName: string | undefined | null,
    type: string | undefined | null,
    uri: string | undefined | null,
  ) => {
    if (fileName && type && uri) {
      addItemToConvert({
        id: generateUniqueId(),
        name: fileName,
        type,
        icon: <Image style={sharedStyles.sourceImage} source={{ uri }} />,
        uri,
      });
      navigation.navigate('Convert');
    }
  };

  const onPressGallery = async () => {
    const images = await pickLibraryPictures();

    images?.forEach(image => {
      const { fileName, type, uri } = image || {};

      prepareItemForConversion(fileName, type, uri);
    });
  };

  const onPressFiles = async () => {
    const file = await selectFile();
    const { name, type, uri } = file || {};

    prepareItemForConversion(name, type, uri);
  };

  const onPressCamera = async () => {
    const image = await pickCameraPicture();
    const { fileName, type, uri } = image || {};

    prepareItemForConversion(fileName, type, uri);
  };

  const downloadFileForConversion = async (url: string) => {
    const fileName = getFileName(url);
    const downloadDest = `${RNFS.DocumentDirectoryPath}/${fileName}`;
    RNFS.downloadFile({
      fromUrl: url,
      toFile: downloadDest,
    })
      .promise.then(async response => {
        if (response.statusCode === 200) {
          const type = getFileType(fileName);

          prepareItemForConversion(fileName, type, downloadDest);
        }
      })
      .catch(() => Alert.alert('Error', 'Unsupported file extension. Please choose another file.'));
  };

  const onPressUrlLink = () => {
    Alert.prompt(
      'Enter Resource URL',
      `Please enter the URL you'd like to use`,
      downloadFileForConversion,
      'plain-text',
      undefined,
      'url',
      { userInterfaceStyle: 'dark' },
    );
  };

  return {
    onPressGallery,
    onPressFiles,
    onPressCamera,
    onPressUrlLink,
  };
};
