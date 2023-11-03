import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import TickIcon from '@assets/icons/tickIconBlack.svg';
// import { useAppData } from "@src/context/AppContext";
import { SubscribeType } from '@src/context/types';
import { styles } from './styles';
import { useScreenDimentions } from '@src/hooks/useDimentions';

type Props = {
  priceText: string;
  descriptionText: string;
  type: SubscribeType;
  label?: string;
  labelColor?: string;
};

export const SubscribeOptionButton = ({ priceText, descriptionText, type, label, labelColor }: Props) => {
  // const { changeSubscribeType, subscriptionType } = useAppData();
  // const isChecked = subscriptionType === type;
  const isChecked = true;
  const { height } = useScreenDimentions();

  const onPress = () => {
    // changeSubscribeType(type);
  };

  return (
    <TouchableOpacity
      style={[styles.subscribeOption, isChecked && styles.whiteSubscribeOption, { paddingVertical: height * 0.02 }]}
      activeOpacity={0.8}
      onPress={onPress}>
      {isChecked ? <TickIcon /> : <View style={styles.circle}></View>}
      <View>
        <Text style={[styles.boldText, isChecked && styles.blackBoldText]}>{priceText}</Text>
        <Text style={[styles.text, isChecked && styles.blackText]}>{descriptionText}</Text>
      </View>
      {!!label && (
        <View style={[styles.label, !!labelColor && { backgroundColor: labelColor }]}>
          <Text style={styles.labelText}>{label}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};
