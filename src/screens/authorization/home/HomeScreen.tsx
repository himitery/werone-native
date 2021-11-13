import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { StackNavigationOptions } from '@react-navigation/stack';

import SafeView from '@components/common/SafeView';
import Info from '@screens/authorization/home/components/Info';
import { useRecoilState } from 'recoil';
import { Token } from '@stores/repositories/TokenRepository';
import tokenSelector from '@stores/recoil/token.store';
import HotGroupList from '@screens/authorization/home/components/hot-group/HotGroupList';
import AlarmList from '@screens/authorization/home/components/alarm/AlarmList';
import NoticeList from '@screens/authorization/home/components/notice/NoticeList';

export const HomeScreenOptions: StackNavigationOptions = {
  headerShown: false,
};

const HomeScreen: React.VFC = () => {
  const [token] = useRecoilState<Token>(tokenSelector);
  // alert(token.accessToken);
  return (
    <SafeView>
      <ScrollView style={styles.container}>
        <Info
          schoolName={'단국대학교'}
          userName={'구지뽕'}
          admissionYear={'21'}
        />
        <AlarmList />
        <NoticeList />
        <HotGroupList />
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
});

export default HomeScreen;
