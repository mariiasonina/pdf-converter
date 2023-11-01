import { StyleSheet } from 'react-native';
import { colors } from '@src/global/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blackSecondary,
    paddingBottom: 24,
  },
  inputContainer: {
    paddingHorizontal: 16,
    height: 48,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: 7.5,
    marginBottom: 50,
    gap: 10,
  },
  input: {
    fontFamily: 'Manrope',
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
    flexGrow: 1,
    flexShrink: 1,
  },
  label: {
    fontFamily: 'Manrope',
    fontSize: 16,
    fontWeight: '600',
    color: colors.grey,
    marginTop: 16,
    marginBottom: 8,
  },
  scrollView: {
    paddingHorizontal: 20,
  },
  button: {
    marginHorizontal: 20,
  }
});
