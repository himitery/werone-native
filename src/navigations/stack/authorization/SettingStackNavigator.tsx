import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { MaterialBottomTabNavigationOptions } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { SettingNavigations } from '@constants/navigations';
import SettingHomeScreen, {
  SettingHomeScreenOptions,
} from '@screens/authorization/setting/SettingHomeScreen';
import { LightTheme } from '@constants/color';
import { Platform } from 'react-native';

export const SettingStackNavigatorOptions: MaterialBottomTabNavigationOptions =
  {
    title: '환경설정',
    tabBarIcon: ({ color }) => (
      <Ionicons name="ios-settings-sharp" size={22} color={color} />
    ),
  };

export type SettingStackParamList = {
  [SettingNavigations.SettingHome]: undefined;
};

const Stack = createStackNavigator<SettingStackParamList>();

const SettingStackNavigator: React.VFC = () => {
  return (
    <Stack.Navigator
      initialRouteName={SettingNavigations.SettingHome}
      screenOptions={screenOptions}
    >
      <Stack.Screen
        name={SettingNavigations.SettingHome}
        component={SettingHomeScreen}
        options={SettingHomeScreenOptions}
      />
    </Stack.Navigator>
  );
};

const screenOptions: StackNavigationOptions = {
  title: '환경설정',
  headerTitleAlign: 'left',
  headerTitleStyle: {
    fontWeight: '700',
    fontSize: 20,
    color: LightTheme.TEXT,
  },
  headerStyle: {
    height: Platform.select({
      android: 80,
      ios: 100,
    }),
  },
};

export default SettingStackNavigator;
