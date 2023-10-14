import { StyleSheet } from 'react-native';
import { colors } from '@src/global/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20%',
  },
  mainText: {
    fontFamily: 'Manrope',
    fontSize: 17,
    fontWeight: '700',
    color: colors.grey,
  },
  text: {
    fontFamily: 'Poppins',
    fontSize: 13,
    fontWeight: '400',
    color: colors.grey,
  },
});
