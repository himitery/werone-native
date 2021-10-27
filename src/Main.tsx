import React, { useEffect, useRef } from 'react';
import RootNavigator from '@navigations/root/RootNavigator';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import { RootNavigations } from '@constants/navigations';
import isAuthUser from '@hooks/isAuthUser';

const Main: React.VFC = () => {
  const auth = isAuthUser();

  const navigationRef =
    useRef<NavigationContainerRef<ReactNavigation.RootParamList>>();

  useEffect(() => {
    if (auth) {
      navigationRef.current.reset({
        index: 0,
        routes: [{ name: RootNavigations.Authorization }],
      });
    }
  }, [navigationRef, auth]);

  return (
    <NavigationContainer ref={navigationRef}>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Main;
