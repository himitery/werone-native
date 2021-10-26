import React, { useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import RootNavigator from '@navigations/root/RootNavigator';

import TokenRepository, { Token } from '@stores/repositories/TokenRepository';
import tokenSelector from '@stores/recoil/token.store';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import { RootNavigations } from '@constants/navigations';
import isAuthUser from '@hooks/isAuthUser';

const Main: React.VFC = () => {
  const tokenStore = useSetRecoilState<Token>(tokenSelector);
  const auth = isAuthUser();

  const navigationRef =
    useRef<NavigationContainerRef<ReactNavigation.RootParamList>>();

  useEffect(() => {
    TokenRepository.get().then((data) => {
      tokenStore(data);
    });
  }, []);

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
