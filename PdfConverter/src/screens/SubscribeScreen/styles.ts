import { colors } from '@src/global/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  saveArea: {
    flex: 1,
    backgroundColor: colors.blackSecondary,
  },
  content: {
    flexGrow: 1,
    backgroundColor: colors.blackSecondary,
    justifyContent: 'space-between',
    paddingBottom: 60,
  },
  backgroundImage: {
    flexGrow: 1,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: colors.red,
    fontSize: 34,
    fontFamily: 'Manrope',
    fontWeight: '700',
    textAlign: 'center',
  },
  text: {
    color: colors.grey,
    fontSize: 16,
    fontFamily: 'Manrope',
    fontWeight: '600',
    textAlign: 'center',
  },
  itemsContainer: {
    paddingHorizontal: 40,
    justifyContent: 'space-around',
    flexGrow: 1,
    gap: 6,
    paddingBottom: 10,
  },
  actionsContainer: {
    paddingHorizontal: 20,
    gap: 15,
  },
});
