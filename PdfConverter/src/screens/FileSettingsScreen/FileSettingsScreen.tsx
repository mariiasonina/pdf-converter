import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
 
const FileSettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>FileSettingsScreen</Text>
    </View>
  );
}

 
export default FileSettingsScreen;