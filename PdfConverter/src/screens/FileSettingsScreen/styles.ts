import { StyleSheet } from 'react-native';
import { colors } from '@src/global/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blackSecondary,
  },
  header: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: colors.darkGrey,
    borderBottomWidth: 1,
  },
  infoContainer: {
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemName: {
    minWidth: '80%',
    flexShrink: 1,
    color: colors.white,
    fontWeight: '700',
    fontSize: 17,
    fontFamily: 'Manrope',
    textTransform: 'capitalize',
  },
  text: {
    color: colors.white,
    fontWeight: '400',
    fontSize: 13,
    fontFamily: 'Poppins',
    textTransform: 'capitalize',
  },
});
