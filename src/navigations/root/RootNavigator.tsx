import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import { RootNavigations } from '@constants/navigations';
import UnAuthorizationStackNavigator from '@navigations/stack/UnAuthorizationStackNavigator';
import MainBottomStackNavigator from '@navigations/tab/MainBottomStackNavigator';

export type RootStackParamList = {
  [RootNavigations.Authorization]: undefined;
  [RootNavigations.UnAuthorization]: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator: React.VFC = () => {
  return (
    <Stack.Navigator
      initialRouteName={RootNavigations.UnAuthorization}
      screenOptions={screenOptions}
    >
      <Stack.Screen
        name={RootNavigations.Authorization}
        component={MainBottomStackNavigator}
      />
      <Stack.Screen
        name={RootNavigations.UnAuthorization}
        component={UnAuthorizationStackNavigator}
      />
    </Stack.Navigator>
  );
};

const screenOptions: StackNavigationOptions = {
  headerShown: false,
};

export default RootNavigator;
