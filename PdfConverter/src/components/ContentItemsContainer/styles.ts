import { colors } from '@src/global/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  itemsContainer: {
    paddingHorizontal: 16,
    backgroundColor: colors.lightGrey,
    borderRadius: 7.5,
  },
  label: {
    fontFamily: 'Manrope',
    fontSize: 16,
    fontWeight: '600',
    color: colors.grey,
    marginTop: 16,
    marginBottom: 8,
  },
  divider: {
    marginLeft: 36,
    borderTopWidth: 1,
    borderTopColor: colors.grey,
  },
});
