import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { colors } from '@src/global/colors';
import TabNavigator from "@src/navigation/TabNavigator";

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
        <TabNavigator />
        <StatusBar barStyle="light-content" />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
