import { colors } from '@src/global/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  upgradeBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.red,
    borderRadius: 7.5,
    padding: 16,
    marginTop: 30,
  },
  button: {
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 22,
  },
  buttonText: {
    fontFamily: 'Poppins',
    fontSize: 13,
    fontWeight: '400',
  },
  boldText: {
    fontFamily: 'Manrope',
    fontSize: 17,
    fontWeight: '700',
    color: colors.blackSecondary,
  },
  text: {
    fontFamily: 'Manrope',
    fontSize: 14,
    fontWeight: '400',
    color: colors.blackSecondary,
  },
});
