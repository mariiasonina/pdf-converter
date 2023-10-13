import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ConvertIcon from '@assets/icons/tabConvertIcon.svg';
import HistoryIcon from '@assets/icons/tabHistoryIcon.svg';
import SettingsIcon from '@assets/icons/tabSettingsIcon.svg';
import LocationsScreen from '@screens/LocationsScreen/LocationsScreen';
import HistoryScreen from '@screens/HistoryScreen/HistoryScreen';
import SettingsScreen from '@screens/SettingsScreen/SettingsScreen';
import { styles } from './styles';
import { colors } from '@src/global/colors';

export type TabParamList = {
  Locations: undefined;
  History: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (focused ? <ConvertIcon fill={colors.blue} /> : <ConvertIcon />),
        }}
        name="Locations"
        component={LocationsScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <HistoryIcon fill={colors.blue} stroke={colors.blue} /> : <HistoryIcon />,
        }}
        name="History"
        component={HistoryScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (focused ? <SettingsIcon stroke={colors.blue} /> : <SettingsIcon />),
        }}
        name="Settings"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
