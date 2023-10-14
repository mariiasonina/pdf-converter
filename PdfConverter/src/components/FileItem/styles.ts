import { colors } from '@src/global/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  image: {
    width: 35,
    height: 50,
  },
  divider: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: colors.grey,
  },
  infoContainer: {
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: colors.lightGrey,
    borderRadius: 14,
  },
  itemName: {
    minWidth: '70%',
    flexShrink: 1,
    color: colors.blackSecondary,
    fontWeight: '700',
    fontSize: 17,
    fontFamily: 'Manrope',
    textTransform: 'capitalize',
  },
  text: {
    color: colors.blackPrimary,
    fontWeight: '400',
    fontSize: 13,
    fontFamily: 'Poppins',
  },
});
