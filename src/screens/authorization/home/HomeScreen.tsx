import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { StackNavigationOptions } from '@react-navigation/stack';

import SafeView from '@components/common/SafeView';
import Info from '@screens/authorization/home/components/Info';
import Alarm from '@screens/authorization/home/components/Alarm';
import { useRecoilState } from 'recoil';
import { Token } from '@stores/repositories/TokenRepository';
import tokenSelector from '@stores/recoil/token.store';
import Notice from '@screens/authorization/home/components/Notice';
import HotGroup from '@screens/authorization/home/components/HotGroup';

export const HomeScreenOptions: StackNavigationOptions = {
  headerShown: false,
};

const HomeScreen: React.VFC = () => {
  const [token] = useRecoilState<Token>(tokenSelector);
  alert(token.accessToken);
  return (
    <SafeView>
      <ScrollView style={styles.container}>
        <Info
          schoolName={'단국대학교'}
          userName={'구지뽕'}
          admissionYear={'21'}
        />
        <Alarm />
        <Notice />
        <HotGroup />
      </ScrollView>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 30,
  },
  alarm: {
    marginTop: 25,
  },

  notice: {
    paddingTop: 15,
    flex: 1,
  },
});

export default HomeScreen;
