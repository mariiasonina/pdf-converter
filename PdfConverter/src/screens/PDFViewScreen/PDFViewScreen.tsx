import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Pdf from 'react-native-pdf';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@src/navigation/StackNavigator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

type Props = {
  route: RouteProp<RootStackParamList, 'PDFView'>;
};

const PDFViewScreen = ({ route }: Props) => {
  const { uri } = route.params;
  console.log(uri);
  
  return (
    <View style={styles.container}>
      <Pdf
        source={{ uri }}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={error => {
          console.log(error);
        }}
        onPressLink={uri => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdf}
      />
    </View>
  );
};

export default PDFViewScreen;
