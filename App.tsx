import React from 'react';
import { RecoilRoot } from 'recoil';
import { LogBox } from 'react-native';

import Main from '@/Main';
import { StatusBar } from 'expo-status-bar';

const App: React.VFC = () => {
  LogBox.ignoreLogs(['Setting a timer for a long period of time']);

  return (
    <>
      <StatusBar style={'auto'} />
      <RecoilRoot>
        <Main />
      </RecoilRoot>
    </>
  );
};

export default App;
