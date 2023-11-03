import React, { PropsWithChildren } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

type Props = PropsWithChildren<{
  firstHeaderLetter: React.ReactElement;
  headerText: string;
  padding?: boolean;
}>;

export const MainContainer = ({ children, firstHeaderLetter, headerText, padding }: Props) => {
  return (
    <View style={[styles.container, padding && { paddingHorizontal: 20 }]}>
      <View style={styles.header}>
        {firstHeaderLetter}
        <Text style={styles.headerText}>{headerText}</Text>
      </View>
      {children}
    </View>
  );
};
