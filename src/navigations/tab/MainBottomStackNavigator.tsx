import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { MainNavigations } from '@constants/navigations';
import HomeStackNavigator from '@navigations/stack/HomeStackNavigator';

export type MainBottomTabParamList = {
  [MainNavigations.MainHome]: undefined;
};

const Tab = createMaterialBottomTabNavigator<MainBottomTabParamList>();

const MainBottomTabNavigator: React.VFC = () => {
  return (
    <Tab.Navigator initialRouteName={MainNavigations.MainHome}>
      <Tab.Screen
        name={MainNavigations.MainHome}
        component={HomeStackNavigator}
      />
    </Tab.Navigator>
  );
};

export default MainBottomTabNavigator;
