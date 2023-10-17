import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SubscribeScreen from '@src/screens/SubscribeScreen/SubscribeScreen';
import FileSettingsScreen from '@src/screens/FileSettingsScreen/FileSettingsScreen';
import ConvertScreen from '@src/screens/ConvertScreen/ConvertScreen';
import { IconButton } from '@src/components/IconButton/IconButton';
import ArrowBackIcon from '@assets/icons/arrowBackIcon.svg';
import LocationsScreen from '@src/screens/LocationsScreen/LocationsScreen';
// import { useAppData } from '@src/context/AppContext';
import HistoryScreen from '@src/screens/HistoryScreen/HistoryScreen';
import SettingsScreen from '@src/screens/SettingsScreen/SettingsScreen';
import { styles } from './styles';

export type RootStackParamList = {
  LocationsStack: undefined;
  HistoryStack: undefined;
  SettingsStack: undefined;
  Subscribe: undefined;
  Convert: undefined;
  FileSettings: { name: string; type: string; date: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const LocationsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={({ navigation, route }) => ({
          headerStyle: styles.stackHeader,
          headerLeft: () => <IconButton onPress={navigation.goBack} icon={<ArrowBackIcon />} />,
          headerTitleStyle: styles.stackHeaderTitleStyle,
          headerShown: route.name !== 'LocationsStack',
        })}>
        <Stack.Screen name="LocationsStack" component={LocationsScreen} />
        <Stack.Screen
          options={{
            title: 'New Conversion',
          }}
          name="Convert"
          component={ConvertScreen}
        />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          presentation: 'fullScreenModal',
          headerShown: false,
        }}>
        <Stack.Screen name="Subscribe" component={SubscribeScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export const HistoryStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HistoryStack" component={HistoryScreen} />
      <Stack.Screen
        options={{
          presentation: 'modal',
          headerShown: false,
        }}
        name="FileSettings"
        component={FileSettingsScreen}
      />
    </Stack.Navigator>
  );
};

export const SettingsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SettingsStack" component={SettingsScreen} />
      <Stack.Screen
        options={{
          presentation: 'fullScreenModal',
          headerShown: false,
        }}
        name="Subscribe"
        component={SubscribeScreen}
      />
    </Stack.Navigator>
  );
};
