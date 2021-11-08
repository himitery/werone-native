import React from 'react';
import {
  createMaterialBottomTabNavigator,
  MaterialBottomTabNavigationOptions,
} from '@react-navigation/material-bottom-tabs';

import { MainNavigations } from '@constants/navigations';
import GroupStackNavigator, {
  GroupStackNavigatorOptions,
} from '@navigations/stack/authorization/GroupStackNavigator';
import HomeStackNavigator, {
  HomeStackNavigatorOptions,
} from '@navigations/stack/authorization/HomeStackNavigator';
import SettingStackNavigator, {
  SettingStackNavigatorOptions,
} from '@navigations/stack/authorization/SettingStackNavigator';
import { LightTheme } from '@constants/color';
import { StyleSheet } from 'react-native';

export type MainBottomTabParamList = {
  [MainNavigations.MainGroup]: undefined;
  [MainNavigations.MainHome]: undefined;
  [MainNavigations.MainSetting]: undefined;
};

const Tab = createMaterialBottomTabNavigator<MainBottomTabParamList>();

const MainBottomTabNavigator: React.VFC = () => {
  return (
    <Tab.Navigator
      initialRouteName={MainNavigations.MainHome}
      screenOptions={screenOptions}
      barStyle={styles.barStyle}
      activeColor={LightTheme.MAIN}
      inactiveColor={LightTheme.INACTIVE}
      keyboardHidesNavigationBar={true}
    >
      <Tab.Screen
        name={MainNavigations.MainGroup}
        component={GroupStackNavigator}
        options={GroupStackNavigatorOptions}
      />
      <Tab.Screen
        name={MainNavigations.MainHome}
        component={HomeStackNavigator}
        options={HomeStackNavigatorOptions}
      />
      <Tab.Screen
        name={MainNavigations.MainSetting}
        component={SettingStackNavigator}
        options={SettingStackNavigatorOptions}
      />
    </Tab.Navigator>
  );
};

const screenOptions: MaterialBottomTabNavigationOptions = {
  tabBarColor: LightTheme.BACK_GROUND,
};

const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: LightTheme.BACK_GROUND,
  },
});

export default MainBottomTabNavigator;
