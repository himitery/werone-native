import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeNavigations } from '@constants/navigations';
import HomeScreen, {
  HomeScreenOptions,
} from '@screens/authorization/home/HomeScreen';

export type HomeStackParamList = {
  [HomeNavigations.Home]: undefined;
};

const Stack = createStackNavigator<HomeStackParamList>();

const HomeStackNavigator: React.VFC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={HomeNavigations.Home}
        component={HomeScreen}
        options={HomeScreenOptions}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
