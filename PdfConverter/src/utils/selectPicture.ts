import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export const pickCameraPicture = async () => {
  try {
    const result = await launchCamera({ mediaType: 'photo' });

    return result;
  } catch (err) {
    console.log('Pick camera picture error:', err);
  }
};

export const pickLibraryPicture = async () => {
  try {
    const result = await launchImageLibrary({ mediaType: 'photo' });

    return result;
  } catch (err) {
    console.log('Pick library picture error:', err);
  }
};
