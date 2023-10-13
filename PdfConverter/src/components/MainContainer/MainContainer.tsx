import React, { PropsWithChildren } from 'react';
import { StyleProp, View, ViewStyle, Text } from 'react-native';
import { styles } from './styles';

type Props = PropsWithChildren<{
  contentStyle?: StyleProp<ViewStyle>;
  firstHeaderLetter: React.ReactElement;
  headerText: string;
}>;

export const MainContainer = ({ children, contentStyle, firstHeaderLetter, headerText }: Props) => {
  return (
    <View style={[styles.container, contentStyle]}>
      <View style={styles.header}>
        {firstHeaderLetter}
        <Text style={styles.headerText}>{headerText}</Text>
      </View>
      {children}
    </View>
  );
};
