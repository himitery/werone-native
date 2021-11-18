import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import {
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';

import SafeView from '@components/common/SafeView';
import GroupListItem from '@screens/authorization/group/components/list/GroupListItem';
import getParticipantGroupApi from '@api/group/participant/get-participant-group.api';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Group from '@api/domain/group';
import _ from 'lodash';
import CustomButton from '@components/common/CustomButton';
import { Colors } from '@constants/color';
import { GroupStackParamList } from '@navigations/stack/authorization/GroupStackNavigator';
import { GroupNavigations } from '@constants/navigations';
import { useSetRecoilState } from 'recoil';
import { bottomBarVisibleStore } from '@stores/recoil/bottom-bar-visible.store';
import MajorItem from '@screens/authorization/group/components/major/MajorItem';

type navigationProp = StackNavigationProp<
  GroupStackParamList,
  GroupNavigations.GroupList
>;

export const GroupListScreenOptions: StackNavigationOptions = {
  title: '그룹 목록',
};

const GroupListScreen: React.VFC = () => {
  const navigation = useNavigation<navigationProp>();

  const setBottomBarVisible = useSetRecoilState<boolean>(bottomBarVisibleStore);

  const [groupList, setGroupList] = useState<Group[]>([]);
  const [page, setPage] = useState<number>(0);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const { data, mutate } = getParticipantGroupApi(page);

  useFocusEffect(
    useCallback(() => {
      setBottomBarVisible(true);
      mutate();
    }, [setBottomBarVisible])
  );

  useEffect(() => {
    if (!data?.myGroupParticipantResponses) return;
    if (data?.myGroupParticipantResponses.length === 0 && page > 0)
      setPage((prev) => prev - 1);
    setGroupList((prev) =>
      _(prev)
        .concat(data?.myGroupParticipantResponses)
        .uniqBy((item) => item.id)
        .orderBy((item) => item.id, ['asc'])
        .value()
    );
  }, [page, data, setGroupList]);

  const keyExtractor = useCallback((item) => item.id, []);

  const renderItem = useCallback(
    ({ item }) => (
      <GroupListItem
        id={item.id}
        imageUrl={item.groupImageUrl}
        name={item.title}
        message={item.notices?.map((notice) => notice.title)}
      />
    ),
    []
  );

  const listHeaderComponent = useCallback(() => <MajorItem />, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    setPage((prev) => prev + 1);
    await mutate();
    setRefreshing(false);
  }, [mutate, setRefreshing, setPage]);

  const handleOnPress = useCallback(() => {
    navigation.push(GroupNavigations.GroupSearch);
  }, [navigation]);

  return (
    <SafeView style={styles.safeContainer}>
      <View style={styles.container}>
        <FlatList<Group>
          data={groupList}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          ListHeaderComponent={listHeaderComponent}
          refreshing={refreshing}
          onRefresh={onRefresh}
          showsVerticalScrollIndicator={false}
        />
        <CustomButton
          text={'새로운 그룹 참여하기'}
          onPress={handleOnPress}
          buttonStyle={styles.buttonContainer}
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
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
  buttonContainer: {
    marginVertical: 10,
  },
  buttonText: {
    color: Colors.WHITE,
  },
});

export default GroupListScreen;
