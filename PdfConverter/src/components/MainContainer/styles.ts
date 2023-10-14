import { colors } from '@src/global/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: colors.blackSecondary,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1,
    paddingVertical: 5,
  },
  headerText: {
    fontSize: 34,
    fontFamily: 'Manrope',
    fontWeight: '700',
    color: colors.grey,
  },
});
