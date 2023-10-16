import { Image } from 'react-native';
import AddFolderIcon from '@assets/icons/addFolderIcon.svg';

export const sourceItems = [
  {
    key: 0,
    icon: (
      <Image
        style={{
          width: 24,
          height: 40,
        }}
        // TODO: mocked image, need to change
        source={require('@assets/images/document.png')}
      />
    ),
    name: 'FileName.jpg',
    withArrow: true,
    onPress: () => {},
  },
  {
    key: 1,
    icon: <AddFolderIcon />,
    name: 'add more images',
    withArrow: true,
    onPress: () => {},
  },
];
