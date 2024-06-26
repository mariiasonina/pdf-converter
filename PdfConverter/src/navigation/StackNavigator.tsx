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
import SignatureScreen from '@src/screens/SignatureScreen/SignatureScreen';
import PDFViewScreen from '@src/screens/PDFViewScreen/PDFViewScreen';
import PDFSettingsScreen from '@src/screens/PDFSettingsScreen/PDFSettingsScreen';
import { RouteProp } from '@react-navigation/native';
import { useAppData } from '@src/context/AppContext';
import { styles } from './styles';

export type RootStackParamList = {
  LocationsStack: undefined;
  HistoryStack: undefined;
  SettingsStack: undefined;
  Subscribe: undefined;
  Convert: undefined;
  FileSettings: { name: string; type: string; date: string };
  Signature: undefined;
  PDFView: { uri: string };
  PDFSettings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const LocationsStack = () => {
  const { clearItems } = useAppData();
  const goBack = (navigation: any, route: RouteProp<RootStackParamList, keyof RootStackParamList>) => {
    navigation.goBack();

    if (route.name === 'Convert') {
      clearItems();
    }
  };

  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={({ navigation, route }) => ({
          headerStyle: styles.stackHeader,
          headerLeft: () => <IconButton onPress={() => goBack(navigation, route)} icon={<ArrowBackIcon />} />,
          headerTitleStyle: styles.stackHeaderTitleStyle,
          headerShown: route.name !== 'LocationsStack',
          orientation: 'portrait',
        })}>
        <Stack.Screen name="LocationsStack" component={LocationsScreen} />
        <Stack.Screen
          options={{
            title: 'New Conversion',
          }}
          name="Convert"
          component={ConvertScreen}
        />
        <Stack.Screen
          options={{
            title: 'PDF Settings',
          }}
          name="PDFSettings"
          component={PDFSettingsScreen}
        />
        <Stack.Screen name="PDFView" component={PDFViewScreen} />
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
    <Stack.Navigator screenOptions={{ headerShown: false, orientation: 'portrait' }}>
      <Stack.Screen name="HistoryStack" component={HistoryScreen} />
      {/* <Stack.Screen name="PDFView" component={PDFViewScreen} /> */}
      <Stack.Screen options={{ presentation: 'modal' }} name="FileSettings" component={FileSettingsScreen} />
    </Stack.Navigator>
  );
};

export const SettingsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, orientation: 'portrait' }}>
      <Stack.Screen name="SettingsStack" component={SettingsScreen} />
      <Stack.Screen
        options={{
          presentation: 'fullScreenModal',
          headerShown: false,
        }}
        name="Subscribe"
        component={SubscribeScreen}
      />
      <Stack.Screen
        options={{ presentation: 'fullScreenModal', orientation: 'landscape' }}
        name="Signature"
        component={SignatureScreen}
      />
    </Stack.Navigator>
  );
};
