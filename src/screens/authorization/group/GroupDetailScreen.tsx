import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, View } from 'react-native';
import { StackNavigationOptions } from '@react-navigation/stack';
import {
  NavigationProp,
  RouteProp,
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { GroupStackParamList } from '@navigations/stack/authorization/GroupStackNavigator';
import { GroupNavigations } from '@constants/navigations';
import CustomHeaderBackButton from '@components/header/CustomHeaderBackButton';
import getGroupInfoApi from '@api/group/get-group-info.api';
import { useSetRecoilState } from 'recoil';
import { bottomBarVisibleStore } from '@stores/recoil/bottom-bar-visible.store';
import SafeView from '@components/common/SafeView';
import MessageBox from '@components/common/MessageBox';
import InfoBox from '@screens/authorization/group/components/InfoBox';
import getKoreanWeek from '@utils/getKoreanWeek';
import { Colors, LightTheme } from '@constants/color';
import GroupDescriptionBox from '@screens/authorization/group/components/GroupDescriptionBox';
import _ from 'lodash';
import CustomButton from '@components/common/CustomButton';
import participantGroupNewApi from '@api/group/participant/participant-group-new.api';

type routeProp = RouteProp<GroupStackParamList, GroupNavigations.GroupDetail>;

type navigationProp = NavigationProp<
  GroupStackParamList,
  GroupNavigations.GroupDetail
>;

export const GroupDetailScreenOptions: StackNavigationOptions = {
  headerBackTitleVisible: false,
  headerLeft: (props) => <CustomHeaderBackButton props={props} />,
};

const GroupDetailScreen: React.VFC = () => {
  const { params } = useRoute<routeProp>();
  const navigation = useNavigation<navigationProp>();

  const setBottomBarVisible = useSetRecoilState<boolean>(bottomBarVisibleStore);

  const [buttonText, setButtonText] = useState<string>('그룹 참가');

  const { data } = getGroupInfoApi({
    groupId: params?.groupId,
  });

  const messages = useMemo<{ title: string; content: string }[]>(
    () =>
      _(data?.notices)
        .orderBy((item) => item.id, ['desc'])
        .map((item) => ({
          title: item.title,
          content: item.content,
        }))
        .value(),
    [data?.notices]
  );

  useFocusEffect(
    useCallback(() => {
      setBottomBarVisible(false);
    }, [setBottomBarVisible])
  );

  useEffect(() => {
    if (!data) return;
    navigation.setOptions({
      title: data.title,
    });
  }, [data]);

  useEffect(() => {
    setButtonText(data?.isParticipant ? '채팅 참가' : '그룹 참가');
  }, [data, setButtonText]);

  const renderItem = useCallback(
    (item, index) => (
      <MessageBox key={index} title={item.title} content={item.content} />
    ),
    []
  );

  const handleOnPress = useCallback(async () => {
    if (data?.isParticipant) {
      Alert.alert('위아원', '서비스 준비중입니다.');
      return;
    }
    if (!data?.id) return;
    await participantGroupNewApi({ groupId: data?.id });
  }, [data?.id, data?.isParticipant]);

  return (
    <SafeView style={styles.safeContainer}>
      <ScrollView bounces={false}>
        <Image
          style={styles.groupImage}
          source={{ uri: data?.groupImageUrl }}
          height={180}
          resizeMode={'cover'}
        />

        <View>
          <InfoBox info={'위치'} description={data?.place} />
        </View>

        <View style={[styles.container, styles.topContainer]}>
          {messages.map(renderItem)}
          <InfoBox info={'위치'} description={data?.place} />
          <InfoBox info={'요일'} description={getKoreanWeek(data?.dayOfWeek)} />
        </View>

        <View style={[styles.container, styles.bottomContainer]}>
          <GroupDescriptionBox description={data?.description} />
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <CustomButton
          text={buttonText}
          onPress={handleOnPress}
          textStyle={styles.buttonText}
        />
      </View>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  groupImage: {
    height: 180,
  },
  container: {
    paddingHorizontal: 12,
  },
  topContainer: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: LightTheme.BORDER_LINE,
  },
  bottomContainer: {
    paddingVertical: 12,
  },
  buttonContainer: {
    bottom: 0,
    width: '100%',
    paddingHorizontal: 12,
  },
  buttonText: {
    color: Colors.WHITE,
  },
});

export default GroupDetailScreen;
