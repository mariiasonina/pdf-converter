import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

type Props = {
  onPress: () => void;
  buttonText: string;
};

export const Button = ({ onPress, buttonText }: Props) => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={onPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};
