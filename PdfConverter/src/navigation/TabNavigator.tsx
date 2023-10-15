import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ConvertIcon from '@assets/icons/tabConvertIcon.svg';
import HistoryIcon from '@assets/icons/tabHistoryIcon.svg';
import SettingsIcon from '@assets/icons/tabSettingsIcon.svg';
import HistoryScreen from '@screens/HistoryScreen/HistoryScreen';
import SettingsScreen from '@screens/SettingsScreen/SettingsScreen';
import { colors } from '@src/global/colors';
import StackNavigator from './StackNavigator';
import { styles } from './styles';

export type TabParamList = {
  Locations: undefined;
  History: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="LocationsTab"
      screenOptions={{
        tabBarStyle: styles.tabBar,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.blue,
        tabBarInactiveTintColor: colors.grey,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <ConvertIcon fill={color} />,
        }}
        name="Locations"
        component={StackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <HistoryIcon fill={color} stroke={color} />,
        }}
        name="History"
        component={HistoryScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <SettingsIcon stroke={color} />,
        }}
        name="Settings"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
