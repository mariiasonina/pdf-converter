import { colors } from '@src/global/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: colors.white,
    borderRadius: 7.5,
    overflow: 'hidden',
  },
  saveArea: {
    flex: 1,
    backgroundColor: colors.blackPrimary,
  },
  topLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  text: {
    fontFamily: 'Manrope',
    fontSize: 20,
    fontWeight: '700',
    color: colors.grey,
    textTransform: 'capitalize',
  },
  colorsContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  color: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: colors.red,
  },
  borderColor: {
    borderWidth: 2,
    borderColor: colors.white,
  },
});
