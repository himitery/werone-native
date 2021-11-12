import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { StackNavigationOptions } from '@react-navigation/stack';

import SafeView from '@components/common/SafeView';
import GroupListItem from '@screens/authorization/group/components/GroupListItem';
import getParticipantGroupApi from '@api/group/participant/get-participant-group.api';
import { useFocusEffect } from '@react-navigation/native';
import Group from '@api/domain/group';
import _ from 'lodash';

export const GroupListScreenOptions: StackNavigationOptions = {};

const GroupListScreen: React.VFC = () => {
  const [groupList, setGroupList] = useState<Group[]>([]);
  const [page, setPage] = useState<number>(0);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const { data, mutate } = getParticipantGroupApi(page);

  useFocusEffect(
    useCallback(() => {
      mutate();
    }, [])
  );

  useEffect(() => {
    if (!data?.myGroupParticipantResponses) return;
    if (data?.myGroupParticipantResponses.length === 0 && page > 0)
      setPage((prev) => prev - 1);
    setGroupList((prev) =>
      _(prev)
        .concat(data?.myGroupParticipantResponses)
        .uniqBy((item) => item.id)
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
        message={[]}
      />
    ),
    []
  );

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    setPage((prev) => prev + 1);
    await mutate();
    setRefreshing(false);
  }, [mutate, setRefreshing, setPage]);

  return (
    <SafeView style={styles.safeContainer}>
      <View style={styles.container}>
        <FlatList<Group>
          data={groupList}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          refreshing={refreshing}
          onRefresh={onRefresh}
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
});

export default GroupListScreen;
