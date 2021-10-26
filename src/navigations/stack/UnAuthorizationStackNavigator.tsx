import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import { UnAuthorizationNavigations } from '@constants/navigations';
import UnAuthorizationHomeScreen, {
  UnAuthorizationHomeScreenOptions,
} from '@screens/unauthorization/UnAuthorizationHomeScreen';
import SignUpScreen, {
  SignUpScreenOptions,
} from '@screens/unauthorization/SignUpScreen';
import KakaoLoginScreen, {
  KakaoLoginScreenOptions,
} from '@screens/unauthorization/KakaoLoginScreen';
import PlatformType from '@api/domain/platformType';

export type UnAuthorizationStackParamList = {
  [UnAuthorizationNavigations.Home]: undefined;
  [UnAuthorizationNavigations.SignUp]: {
    email?: string;
    platformId: string;
    platformType: PlatformType;
    profileImageUrl?: string;
  };
  [UnAuthorizationNavigations.Kakao]: undefined;
  [UnAuthorizationNavigations.Naver]: undefined;
};

const Stack = createStackNavigator<UnAuthorizationStackParamList>();

const UnAuthorizationStackNavigator: React.VFC = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
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
      <Stack.Screen
        name={UnAuthorizationNavigations.Kakao}
        component={KakaoLoginScreen}
        options={KakaoLoginScreenOptions}
      />
    </Stack.Navigator>
  );
};

const screenOptions: StackNavigationOptions = {
  headerShown: false,
};

export default UnAuthorizationStackNavigator;
