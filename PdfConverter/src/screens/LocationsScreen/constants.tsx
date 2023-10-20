import { Alert } from 'react-native';
import GalleryIcon from '@assets/icons/galleryIcon.svg';
import FilesIcon from '@assets/icons/filesIcon.svg';
import CameraIcon from '@assets/icons/cameraIcon.svg';
import LinkIcon from '@assets/icons/linkIcon.svg';
import OtherAppIcon from '@assets/icons/otherAppIcon.svg';
import { colors } from '@src/global/colors';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@src/navigation/StackNavigator';
import { pickCameraPicture, pickLibraryPicture } from '@src/utils/selectPicture';
import { selectFile } from "@src/utils/selectFile";

export const locationItems = (navigation: NavigationProp<RootStackParamList>) => [
  {
    key: 0,
    icon: <GalleryIcon />,
    name: 'gallery',
    color: colors.white,
    onPress: async () => {
      const result = await pickLibraryPicture();
      console.log(result);
    },
  },
  {
    key: 1,
    icon: <FilesIcon />,
    name: 'files',
    color: colors.blue,
    onPress: async () => {
      const result = await selectFile();
      console.log(result);
    },
  },
  {
    key: 2,
    icon: <CameraIcon />,
    name: 'camera',
    color: colors.red,
    onPress: async () => {
      const result = await pickCameraPicture();
      console.log(result);
    },
  },
  {
    key: 3,
    icon: <LinkIcon />,
    name: 'URL link',
    color: colors.yellow,
    onPress: () => {
      Alert.prompt(
        'Enter Resource URL',
        `Please enter the URL you'd like to use`,
        () => {},
        'plain-text',
        undefined,
        'url',
        { userInterfaceStyle: 'dark' },
      );
    },
  },
  { key: 4, icon: <OtherAppIcon />, name: 'other app', color: colors.grey, onPress: () => {} },
];
