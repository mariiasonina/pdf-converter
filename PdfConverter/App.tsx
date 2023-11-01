import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { colors } from '@src/global/colors';
import TabNavigator from '@src/navigation/TabNavigator';
import AppProvider from '@src/context/AppProvider';

const styles = StyleSheet.create({
  saveArea: {
    flex: 1,
    backgroundColor: colors.blackSecondary,
  },
});

const App = () => {
  return (
    <SafeAreaView style={styles.saveArea}>
      <AppProvider>
        <NavigationContainer>
          <TabNavigator />
          <StatusBar barStyle="light-content" />
        </NavigationContainer>
      </AppProvider>
    </SafeAreaView>
  );
};

export default App;
