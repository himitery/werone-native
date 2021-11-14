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
import GroupSearchScreen, {
  GroupSearchScreenOptions,
} from '@screens/authorization/group/GroupSearchScreen';
import GroupCreateScreen, {
  GroupCreateScreenOptions,
} from '@screens/authorization/group/GroupCreateScreen';

export const GroupStackNavigatorOptions: MaterialBottomTabNavigationOptions = {
  title: '그룹 목록',
  tabBarIcon: ({ color }) => (
    <Ionicons name="ios-list" size={22} color={color} />
  ),
};

export type GroupStackParamList = {
  [GroupNavigations.GroupList]: undefined;
  [GroupNavigations.GroupDetail]: { groupId: number };
  [GroupNavigations.GroupSearch]: undefined;
  [GroupNavigations.GroupCreate]: undefined;
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
      <Stack.Screen
        name={GroupNavigations.GroupSearch}
        component={GroupSearchScreen}
        options={GroupSearchScreenOptions}
      />
      <Stack.Screen
        name={GroupNavigations.GroupCreate}
        component={GroupCreateScreen}
        options={GroupCreateScreenOptions}
      />
    </Stack.Navigator>
  );
};

const screenOptions: StackNavigationOptions = {
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
