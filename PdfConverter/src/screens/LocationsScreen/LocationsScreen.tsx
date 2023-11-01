import React from 'react';
import { View } from 'react-native';
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
import { usePickFiles } from "@src/hooks/usePickFiles";
import { styles } from './styles';

type Props = {
  navigation: NavigationProp<RootStackParamList>;
};

const LocationsScreen = ({ navigation }: Props) => {
  const { onPressGallery, onPressFiles, onPressCamera, onPressUrlLink } = usePickFiles(navigation);

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
