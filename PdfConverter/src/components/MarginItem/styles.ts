import { StyleSheet } from 'react-native';
import { colors } from '@src/global/colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  circle: {
    width: 22,
    height: 22,
    marginVertical: 11,
    borderRadius: 11,
    backgroundColor: colors.blackSecondary,
    borderWidth: 2,
    borderColor: colors.white,
  },
  text: {
    fontFamily: 'Manrope',
    fontSize: 16,
    fontWeight: '600',
    color: colors.grey,
  },
});
