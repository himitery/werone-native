import React from 'react';
import { LogBox } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { RecoilRoot } from 'recoil';
import { SWRConfig } from 'swr';
import { Cache, ConfigOptions, SWRConfiguration } from 'swr/dist/types';

import Main from '@/Main';
import reissueApi from '@api/auth/reissue.api';

const App: React.VFC = () => {
  LogBox.ignoreLogs(['Setting a timer for a long period of time']);

  const swrConfig: SWRConfiguration &
    Partial<ConfigOptions> & {
      provider?: (cache: Readonly<Cache>) => Cache;
    } = {
    onErrorRetry: async (err, key, config, revalidate, { retryCount }) => {
      if (err.status !== 401) return;

      await reissueApi();

      setTimeout(() => revalidate({ retryCount }), 100);
    },
  };

  return (
    <>
      <StatusBar style={'auto'} />
      <SWRConfig value={swrConfig}>
        <RecoilRoot>
          <Main />
        </RecoilRoot>
      </SWRConfig>
    </>
  );
};

export default App;
