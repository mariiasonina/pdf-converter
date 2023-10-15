import { StyleSheet } from 'react-native';
import { colors } from '@src/global/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blackSecondary,
  },
  itemsContainer: {
    paddingHorizontal: 20,
  },
  button: {
    margin: 20,
    paddingVertical: 10,
    backgroundColor: colors.red,
    borderRadius: 7.5,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Manrope',
    fontSize: 22,
    fontWeight: '700',
  },
});
