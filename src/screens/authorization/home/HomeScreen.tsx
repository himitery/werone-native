import React, { useCallback } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { StackNavigationOptions } from '@react-navigation/stack';

import SafeView from '@components/common/SafeView';
import UserInfo from '@screens/authorization/home/components/info/UserInfo';
import HotGroupList from '@screens/authorization/home/components/hot-group/HotGroupList';
import AlarmList from '@screens/authorization/home/components/alarm/AlarmList';
import NoticeList from '@screens/authorization/home/components/notice/NoticeList';
import { useSetRecoilState } from 'recoil';
import { bottomBarVisibleStore } from '@stores/recoil/bottom-bar-visible.store';
import { useFocusEffect } from '@react-navigation/native';

export const HomeScreenOptions: StackNavigationOptions = {
  headerShown: false,
};

const HomeScreen: React.VFC = () => {
  const setBottomBarVisible = useSetRecoilState<boolean>(bottomBarVisibleStore);

  useFocusEffect(
    useCallback(() => {
      setBottomBarVisible(true);
    }, [setBottomBarVisible])
  );

  return (
    <SafeView>
      <ScrollView style={styles.container}>
        <UserInfo />
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
