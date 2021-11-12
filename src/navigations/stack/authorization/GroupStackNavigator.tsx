import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { MaterialBottomTabNavigationOptions } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { GroupNavigations } from '@constants/navigations';
import GroupListScreen, {
  GroupListScreenOptions,
} from '@screens/authorization/group/GroupListScreen';
import { LightTheme } from '@constants/color';
import { Platform } from 'react-native';
import GroupDetailScreen, {
  GroupDetailScreenOptions,
} from '@screens/authorization/group/GroupDetailScreen';

export const GroupStackNavigatorOptions: MaterialBottomTabNavigationOptions = {
  title: '그룹 목록',
  tabBarIcon: ({ color }) => (
    <Ionicons name="ios-list" size={22} color={color} />
  ),
};

export type GroupStackParamList = {
  [GroupNavigations.GroupList]: undefined;
  [GroupNavigations.GroupDetail]: { groupId: number };
};

const Stack = createStackNavigator<GroupStackParamList>();

const GroupStackNavigator: React.VFC = () => {
  return (
    <Stack.Navigator
      initialRouteName={GroupNavigations.GroupList}
      screenOptions={screenOptions}
    >
      <Stack.Screen
        name={GroupNavigations.GroupList}
        component={GroupListScreen}
        options={GroupListScreenOptions}
      />
      <Stack.Screen
        name={GroupNavigations.GroupDetail}
        component={GroupDetailScreen}
        options={GroupDetailScreenOptions}
      />
    </Stack.Navigator>
  );
};

const screenOptions: StackNavigationOptions = {
  title: '그룹 목록',
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

export default GroupStackNavigator;
