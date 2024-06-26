import { colors } from '@src/global/colors';
import { StyleSheet } from 'react-native';

export const sharedStyles = StyleSheet.create({
  divider: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: colors.grey,
  },
  sourceImage: {
    minWidth: 24,
    minHeight: 24,
    maxHeight: 40,
    maxWidth: 40,
  },
});
