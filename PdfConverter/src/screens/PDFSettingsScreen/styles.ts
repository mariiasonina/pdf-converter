import { StyleSheet } from 'react-native';
import { colors } from '@src/global/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.blackSecondary,
  },
  label: {
    fontFamily: 'Manrope',
    fontSize: 16,
    fontWeight: '600',
    color: colors.grey,
    marginTop: 16,
    marginBottom: 8,
  },
  marginsContainer: {
    marginVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  slider: {
    marginHorizontal: 20,
    marginVertical: 16,
  },
  headerDoneButton: {
    color: colors.lightGrey,
    fontFamily: 'Manrope',
    fontSize: 17,
    fontWeight: '700',
  },
});
