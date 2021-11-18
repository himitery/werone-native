import React, { useEffect, useRef } from 'react';

import RootNavigator from '@navigations/root/RootNavigator';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {
  RootNavigations,
  UnAuthorizationNavigations,
} from '@constants/navigations';
import isAuthUser from '@hooks/isAuthUser';
import AccountStatus from '@api/domain/accountStatus';

const Main: React.VFC = () => {
  const [isAuth, accountStatus] = isAuthUser();

  const navigationRef =
    useRef<NavigationContainerRef<ReactNavigation.RootParamList>>();

  useEffect(() => {
    if (isAuth && accountStatus === AccountStatus.APPROVED) {
      navigationRef.current.reset({
        index: 0,
        routes: [{ name: RootNavigations.Authorization }],
      });
    } else if (isAuth && accountStatus === AccountStatus.PROCESSING) {
      navigationRef.current.reset({
        index: 0,
        routes: [{ name: UnAuthorizationNavigations.ApprovalWaiting }],
      });
    }
  }, [navigationRef, isAuth, accountStatus]);

  return (
    <NavigationContainer ref={navigationRef}>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Main;
