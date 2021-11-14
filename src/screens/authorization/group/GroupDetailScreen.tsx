import React, { useCallback, useEffect, useMemo } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
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
import Conditional from '@hocs/Conditional';
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
  const {
    params: { groupId },
  } = useRoute<routeProp>();
  const navigation = useNavigation<navigationProp>();

  const setBottomBarVisible = useSetRecoilState<boolean>(bottomBarVisibleStore);

  const { data } = getGroupInfoApi({ groupId });

  const messages = useMemo<string[]>(
    () =>
      _(data?.notices)
        .orderBy((item) => item.id, ['desc'])
        .map((item) => item.title)
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

  const renderItem = useCallback(
    (item, index) => <MessageBox key={index} message={item} />,
    []
  );

  const handleOnPress = useCallback(async () => {
    if (!data?.id) return;
    await participantGroupNewApi({ groupId: data?.id });
  }, [data?.id]);

  return (
    <SafeView style={styles.safeContainer}>
      <ScrollView bounces={false}>
        <Image
          style={styles.groupImage}
          source={{ uri: data?.groupImageUrl }}
          height={180}
          resizeMode={'cover'}
        />
        <View style={[styles.container, styles.topContainer]}>
          {messages.map(renderItem)}
          <InfoBox info={'위치'} description={data?.place} />
          <InfoBox info={'요일'} description={getKoreanWeek(data?.dayOfWeek)} />
        </View>

        <View style={[styles.container, styles.bottomContainer]}>
          <GroupDescriptionBox description={data?.description} />
        </View>
      </ScrollView>
      <Conditional condition={!data?.isParticipant}>
        <View style={styles.buttonContainer}>
          <CustomButton
            text={'그룹 참가'}
            onPress={handleOnPress}
            textStyle={styles.buttonText}
          />
        </View>
      </Conditional>
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
