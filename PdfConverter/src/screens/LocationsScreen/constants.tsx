import GalleryIcon from '@assets/icons/galleryIcon.svg';
import FilesIcon from '@assets/icons/filesIcon.svg';
import CameraIcon from '@assets/icons/cameraIcon.svg';
import LinkIcon from '@assets/icons/linkIcon.svg';
import OtherAppIcon from '@assets/icons/otherAppIcon.svg';
import { colors } from '@src/global/colors';

export const locationItems = [
  { key: 0, icon: <GalleryIcon />, name: 'gallery', color: colors.white, onPress: () => {} },
  { key: 1, icon: <FilesIcon />, name: 'files', color: colors.blue, onPress: () => {} },
  { key: 2, icon: <CameraIcon />, name: 'camera', color: colors.red, onPress: () => {} },
  { key: 3, icon: <LinkIcon />, name: 'URL link', color: colors.yellow, onPress: () => {} },
  { key: 4, icon: <OtherAppIcon />, name: 'other app', color: colors.grey, onPress: () => {} },
];
