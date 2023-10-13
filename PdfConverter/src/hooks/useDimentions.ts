import { useWindowDimensions } from 'react-native';

export const useScreenDimentions = () => {
  const { width, height } = useWindowDimensions();

  return { width, height };
};
