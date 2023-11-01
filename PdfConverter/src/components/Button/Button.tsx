import { TouchableOpacity, Text, StyleProp, ViewStyle } from 'react-native';
import { styles } from './styles';

type Props = {
  onPress: () => void;
  buttonText: string;
  buttonStyle?: StyleProp<ViewStyle>;
};

export const Button = ({ onPress, buttonText, buttonStyle }: Props) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} activeOpacity={0.8} onPress={onPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};
