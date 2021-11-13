import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import PlatformType from '@api/domain/platformType';
import { UnAuthorizationNavigations } from '@constants/navigations';
import UnAuthorizationHomeScreen, {
  UnAuthorizationHomeScreenOptions,
} from '@screens/un-authorization/UnAuthorizationHomeScreen';
import SignUpScreen, {
  SignUpScreenOptions,
} from '@screens/un-authorization/SignUpScreen';
import KakaoLoginScreen, {
  KakaoLoginScreenOptions,
} from '@screens/un-authorization/KakaoLoginScreen';
import ApprovalWaitingScreen, {
  ApprovalWaitingScreenOptions,
} from '@screens/un-authorization/ApprovalWaitingScreen';

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
  [UnAuthorizationNavigations.ApprovalWaiting]: undefined;
};

const Stack = createStackNavigator<UnAuthorizationStackParamList>();

const UnAuthorizationStackNavigator: React.VFC = () => {
  return (
    <Stack.Navigator
      initialRouteName={UnAuthorizationNavigations.Home}
      screenOptions={screenOptions}
    >
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
      <Stack.Screen
        name={UnAuthorizationNavigations.ApprovalWaiting}
        component={ApprovalWaitingScreen}
        options={ApprovalWaitingScreenOptions}
      />
    </Stack.Navigator>
  );
};

const screenOptions: StackNavigationOptions = {
  headerShown: false,
};

export default UnAuthorizationStackNavigator;
