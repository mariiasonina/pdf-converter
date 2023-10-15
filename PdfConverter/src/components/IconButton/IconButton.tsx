import { Pressable } from "react-native";

type Props = {
  icon: React.ReactElement;
  onPress: () => void;
};

export const IconButton = ({ icon, onPress }: Props) => (
  <Pressable onPress={onPress}>{icon}</Pressable>
);
