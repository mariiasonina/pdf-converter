import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  itemsContainer: {
    flex: 1,
    flexGrow: 1,
    gap: 20,
    paddingVertical: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    minWidth: 24,
    minHeight: 24,
    maxHeight: 40,
    maxWidth: 40,
  },
});
