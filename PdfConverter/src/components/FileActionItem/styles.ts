import { colors } from '@src/global/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 12,
  },
  actionName: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 16,
    fontFamily: 'Manrope',
  },
  actionNameContainer: {
    flexGrow: 1,
    paddingVertical: 12,
  },
  line: {
    borderTopColor: colors.darkGrey,
    borderTopWidth: 1,
  },
});
