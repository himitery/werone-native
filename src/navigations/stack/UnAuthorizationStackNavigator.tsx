import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { UnAuthorizationNavigations } from '@constants/navigations';
import UnAuthorizationHomeScreen, {
  UnAuthorizationHomeScreenOptions,
} from '@screens/unauthorization/UnAuthorizationHomeScreen';
import SignUpScreen, {
  SignUpScreenOptions,
} from '@screens/unauthorization/SignUpScreen';

export type UnAuthorizationStackParamList = {
  [UnAuthorizationNavigations.Home]: undefined;
  [UnAuthorizationNavigations.SignUp]: undefined;
  [UnAuthorizationNavigations.Kakao]: undefined;
  [UnAuthorizationNavigations.Naver]: undefined;
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
      <Stack.Screen
        name={UnAuthorizationNavigations.SignUp}
        component={SignUpScreen}
        options={SignUpScreenOptions}
      />
    </Stack.Navigator>
  );
};

export default UnAuthorizationStackNavigator;
