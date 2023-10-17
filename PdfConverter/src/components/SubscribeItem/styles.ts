import { StyleSheet } from 'react-native';
import { colors } from '@src/global/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    width: '80%',
  },
  mainText: {
    fontFamily: 'Manrope',
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
    textTransform: 'capitalize',
  },
  subText: {
    color: colors.grey,
    fontSize: 13,
    fontFamily: 'Poppins',
    fontWeight: '400',
  },
});
