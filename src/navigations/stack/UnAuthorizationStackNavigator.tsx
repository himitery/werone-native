import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { UnAuthorizationNavigations } from '@constants/navigations';
import UnAuthorizationHomeScreen, {
  UnAuthorizationHomeScreenOptions,
} from '@screens/unauthorization/UnAuthorizationHomeScreen';

export type UnAuthorizationStackParamList = {
  [UnAuthorizationNavigations.Home]: undefined;
};

const Stack = createStackNavigator<UnAuthorizationStackParamList>();

const UnAuthorizationStackNavigator: React.VFC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={UnAuthorizationNavigations.Home}
        component={UnAuthorizationHomeScreen}
        options={UnAuthorizationHomeScreenOptions}
      />
    </Stack.Navigator>
  );
};

export default UnAuthorizationStackNavigator;
