import { colors } from '@src/global/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    backgroundColor: colors.red,
    borderRadius: 7.5,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Manrope',
    fontSize: 22,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
});
