import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SubscribeScreen from '@src/screens/SubscribeScreen/SubscribeScreen';
import FileSettingsScreen from '@src/screens/FileSettingsScreen/FileSettingsScreen';
// import { useAppData } from '@src/context/AppContext';
import TabNavigator from './TabNavigator';
import { styles } from './styles';

export type RootStackParamList = {
  LocationsStack: undefined;
  Subscribe: undefined;
  FileSettings: { name: string; type: string; date: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  // const { isFirstTimeEntry } = useAppData();

  // if (isFirstTimeEntry === null) {
  //   return null;
  // }

  return (
    <Stack.Navigator initialRouteName={'LocationsStack'}>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LocationsStack" component={TabNavigator} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          presentation: 'modal',
          headerShown: false,
        }}>
        <Stack.Screen name="FileSettings" component={FileSettingsScreen} />
        <Stack.Screen name="Subscribe" component={SubscribeScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
