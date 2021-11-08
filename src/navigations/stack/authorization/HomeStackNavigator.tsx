import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialBottomTabNavigationOptions } from '@react-navigation/material-bottom-tabs';
import { Entypo } from '@expo/vector-icons';

import { HomeNavigations } from '@constants/navigations';
import HomeScreen, {
  HomeScreenOptions,
} from '@screens/authorization/home/HomeScreen';

export const HomeStackNavigatorOptions: MaterialBottomTabNavigationOptions = {
  title: '홈',
  tabBarIcon: ({ color }) => <Entypo name="home" size={22} color={color} />,
};

export type HomeStackParamList = {
  [HomeNavigations.Home]: undefined;
};

const Stack = createStackNavigator<HomeStackParamList>();

const HomeStackNavigator: React.VFC = () => {
  return (
    <Stack.Navigator
      initialRouteName={HomeNavigations.Home}
      screenOptions={screenOptions}
    >
      <Stack.Screen
        name={HomeNavigations.Home}
        component={HomeScreen}
        options={HomeScreenOptions}
      />
    </Stack.Navigator>
  );
};

const screenOptions: StackNavigationOptions = {
  headerShown: false,
};

export default HomeStackNavigator;
