import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from '@src/navigation/StackNavigator';
import { colors } from '@src/global/colors';

const styles = StyleSheet.create({
  saveArea: {
    flex: 1,
    backgroundColor: colors.blackSecondary,
  },
});

const App = () => {
  return (
    <SafeAreaView style={styles.saveArea}>
      <NavigationContainer>
        <StackNavigator />
        <StatusBar barStyle="light-content" />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
