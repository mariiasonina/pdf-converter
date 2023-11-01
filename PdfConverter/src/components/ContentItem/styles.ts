import { colors } from '@src/global/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 48,
    backgroundColor: colors.lightGrey,
    gap: 12,
    borderRadius: 7.5,
  },
  text: {
    fontFamily: 'Manrope',
    fontSize: 16,
    fontWeight: '600',
    color: colors.blackSecondary,
    flexGrow: 1,
    minWidth: '70%',
    flexShrink: 1,
  },
});
