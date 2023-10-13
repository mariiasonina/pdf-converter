import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from '@src/navigation/StackNavigator';
import { colors } from '@src/global/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blackSecondary,
  },
});

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <StackNavigator />
        <StatusBar barStyle="light-content" />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
