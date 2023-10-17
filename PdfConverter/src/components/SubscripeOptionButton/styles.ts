import { colors } from "@src/global/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  subscribeOption: {
    paddingHorizontal: 16,
    borderRadius: 14,
    borderWidth: 2,
    backgroundColor: colors.blackSecondary,
    borderColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    position: 'relative',
  },
  whiteSubscribeOption: {
    backgroundColor: colors.white,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.blackSecondary,
    borderWidth: 2,
    borderColor: colors.white,
  },
  boldText: {
    fontSize: 20,
    color: colors.white,
    fontWeight: '700',
    fontFamily: 'Manrope',
    textTransform: 'capitalize',
  },
  text: {
    fontSize: 13,
    color: colors.grey,
    fontWeight: '400',
    fontFamily: 'Manrope',
  },
  blackBoldText: {
    color: colors.blackSecondary,
  },
  blackText: {
    color: colors.darkGrey,
  },
  label: {
    alignItems: 'center',
    width: 95,
    borderRadius: 7,
    position: 'absolute',
    top: -10,
    right: 20,
  },
  labelText: {
    fontSize: 17,
    color: colors.white,
    fontWeight: '700',
    fontFamily: 'Manrope',
    textTransform: 'capitalize',
  },
});
