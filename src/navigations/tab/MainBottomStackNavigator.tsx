import React, { useMemo } from 'react';
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
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { useRecoilValue } from 'recoil';

import { bottomBarVisibleStore } from '@stores/recoil/bottom-bar-visible.store';

export type MainBottomTabParamList = {
  [MainNavigations.MainGroup]: undefined;
  [MainNavigations.MainHome]: undefined;
  [MainNavigations.MainSetting]: undefined;
};

const Tab = createMaterialBottomTabNavigator<MainBottomTabParamList>();

const MainBottomTabNavigator: React.VFC = () => {
  const bottomVisible = useRecoilValue<boolean>(bottomBarVisibleStore);

  const barVisible = useMemo<StyleProp<ViewStyle>>(
    () => ({ display: bottomVisible ? 'flex' : 'none' }),
    [bottomVisible]
  );

  return (
    <Tab.Navigator
      initialRouteName={MainNavigations.MainHome}
      screenOptions={screenOptions}
      barStyle={[styles.barStyle, barVisible]}
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
