import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
 
const LocationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>LocationsScreen</Text>
    </View>
  );
}

 
export default LocationsScreen;