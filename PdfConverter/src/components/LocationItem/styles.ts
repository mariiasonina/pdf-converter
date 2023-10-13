import { StyleSheet } from 'react-native';
import { colors } from '@src/global/colors';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    borderRadius: 22,
    padding: 20,
  },
  itemText: {
    fontFamily: 'Manrope',
    fontSize: 22,
    fontWeight: '700',
    color: colors.blackSecondary,
    alignSelf: 'flex-end',
    textTransform: 'capitalize',
  },
});
