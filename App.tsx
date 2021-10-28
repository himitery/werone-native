import React, { useEffect } from 'react';
import { LogBox } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { RecoilRoot } from 'recoil';
import { SWRConfig } from 'swr';
import { Cache, ConfigOptions, SWRConfiguration } from 'swr/dist/types';

import Main from '@/Main';
import TokenRepository from '@stores/repositories/TokenRepository';
import reissueApi from '@api/auth/reissue.api';
import instance from '@config/axios';

const App: React.VFC = () => {
  LogBox.ignoreLogs(['Setting a timer for a long period of time']);

  useEffect(() => {
    TokenRepository.get().then((token) => {
      if (!token) return;
      instance.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${token.accessToken}`;
    });
  }, []);

  const swrConfig: SWRConfiguration &
    Partial<ConfigOptions> & {
      provider?: (cache: Readonly<Cache>) => Cache;
    } = {
    errorRetryCount: 3,
    onErrorRetry: async (err, key, config, revalidate, { retryCount }) => {
      const statusCode = +err
        .toString()
        .split('\n')[0]
        .split('status code ')[1];
      if (statusCode !== 401) return;

      const existingToken = await TokenRepository.get();
      if (!existingToken) return;

      const incomingToken = await reissueApi({
        url: key,
        refreshToken: existingToken.refreshToken,
      });
      if (!incomingToken) return;
      TokenRepository.set(incomingToken);
      instance.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${incomingToken.accessToken}`;

      setTimeout(() => revalidate({ retryCount }), 1000);
    },
  };

  return (
    <>
      <StatusBar style={'auto'} />
      <RecoilRoot>
        <SWRConfig value={swrConfig}>
          <Main />
        </SWRConfig>
      </RecoilRoot>
    </>
  );
};

export default App;
