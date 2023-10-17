import React from 'react';
import { View, Text } from 'react-native';
import { styles } from "./styles";

type Props = {
  icon: React.ReactElement;
  mainText: string;
  subText: string;
};

const SubscribeItem = ({ icon, mainText, subText }: Props) => {
  return (
    <View style={styles.container}>
      {icon}
      <View>
        <Text style={styles.mainText}>{mainText}</Text>
        <Text style={styles.subText}>{subText}</Text>
      </View>
    </View>
  );
};

export default SubscribeItem;
