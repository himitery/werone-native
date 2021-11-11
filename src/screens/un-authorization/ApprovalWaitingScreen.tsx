import React, { useCallback, useMemo, useState } from 'react';
import {
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StackNavigationOptions } from '@react-navigation/stack';

import SafeView from '@components/common/SafeView';
import { LightTheme } from '@constants/color';
import meApi from '@api/user/me.api';
import Conditional from '@hocs/Conditional';
import MessageBox from '@screens/un-authorization/components/approval-waiting/MessageBox';
import { useSetRecoilState } from 'recoil';
import User from '@api/domain/user';
import meSelector from '@stores/recoil/me.store';

export const ApprovalWaitingScreenOptions: StackNavigationOptions = {};

const ApprovalWaitingScreen: React.VFC = () => {
  const setMe = useSetRecoilState<User>(meSelector);

  const { data, mutate } = meApi();

  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    setMe(await mutate());
    setRefreshing(false);
  }, [mutate]);

  const refreshControl = useMemo(
    () => <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />,
    [refreshing, onRefresh]
  );

  return (
    <SafeView style={styles.safeContainer}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}
        refreshControl={refreshControl}
      >
        <Image
          style={styles.image}
          source={require('./images/loading.gif')}
          width={160}
          height={160}
        />
        <Conditional condition={!!data?.name}>
          <Text
            style={styles.message}
          >{`${data?.name}님의\n학교 및 학과정보를\n인증 중입니다.\n\n조금만 기다려 주세요 :)`}</Text>
          <View style={styles.messageBoxContainer}>
            <MessageBox
              title={`인증정보 갱신 방법`}
              content={`화면을 밑으로 끌어 내리면\n최신 정보로 갱신됩니다.`}
            />
            <MessageBox
              title={`인증 소요 시간`}
              content={`영업일 기준 최대 1일\n비영업일 기준 최대 3일`}
            />
          </View>
        </Conditional>
      </ScrollView>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: LightTheme.BACK_GROUND,
  },
  container: {
    flex: 1,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  image: {
    width: 160,
    height: 160,
    marginVertical: 32,
  },
  message: {
    fontWeight: '700',
    fontSize: 26,
    color: LightTheme.TEXT,
    textAlign: 'center',
  },
  messageBoxContainer: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
  },
});

export default ApprovalWaitingScreen;
