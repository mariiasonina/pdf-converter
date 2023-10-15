import { colors } from '@src/global/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.blackSecondary,
    borderTopWidth: 0,
    height: 50,
  },
  stackHeader: {
    backgroundColor: colors.blackSecondary,
  },
  stackHeaderTitleStyle: {
    fontFamily: 'Manrope',
    fontSize: 22,
    fontWeight: '700',
    textTransform: 'capitalize',
    color: colors.grey,
  },
});
