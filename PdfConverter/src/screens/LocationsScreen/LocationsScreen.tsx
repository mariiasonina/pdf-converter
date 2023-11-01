import React from 'react';
import { Alert, Image, View } from 'react-native';
import RNFS from 'react-native-fs';
import LetterL from '@assets/images/letterL.svg';
import { MainContainer } from '@src/components/MainContainer/MainContainer';
import LocationItem from '@src/components/LocationItem/LocationItem';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@src/navigation/StackNavigator';
import GalleryIcon from '@assets/icons/galleryIcon.svg';
import FilesIcon from '@assets/icons/filesIcon.svg';
import CameraIcon from '@assets/icons/cameraIcon.svg';
import LinkIcon from '@assets/icons/linkIcon.svg';
import OtherAppIcon from '@assets/icons/otherAppIcon.svg';
import { colors } from '@src/global/colors';
import { pickCameraPicture, pickLibraryPictures } from '@src/utils/selectPicture';
import { useAppData } from '@src/context/AppContext';
import { generateUniqueId, getFileType, getFileName } from '@src/utils/helpers';
import { selectFile } from '@src/utils/selectFile';
import { styles } from './styles';

type Props = {
  navigation: NavigationProp<RootStackParamList>;
};

const LocationsScreen = ({ navigation }: Props) => {
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
        icon: <Image style={styles.image} source={{ uri }} />,
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

  const onPressOtherApp = () => {};

  return (
    <MainContainer firstHeaderLetter={<LetterL />} headerText="ocations" padding>
      <View style={styles.itemsContainer}>
        <LocationItem icon={<GalleryIcon />} name="gallery" color={colors.white} onPress={onPressGallery} />
        <LocationItem icon={<FilesIcon />} name="files" color={colors.blue} onPress={onPressFiles} />
        <LocationItem icon={<CameraIcon />} name="camera" color={colors.red} onPress={onPressCamera} />
        <LocationItem icon={<LinkIcon />} name="URL link" color={colors.yellow} onPress={onPressUrlLink} />
        <LocationItem icon={<OtherAppIcon />} name="other app" color={colors.grey} onPress={onPressOtherApp} />
      </View>
    </MainContainer>
  );
};

export default LocationsScreen;
