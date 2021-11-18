import React, { useCallback } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import getGroupCategoryApi from '@api/group/get-group-category.api';
import GroupCategoryBarItem from '@screens/authorization/group/components/category/GroupCategoryBarItem';

const GroupCategoryBar: React.VFC = () => {
  const { data } = getGroupCategoryApi();

  const keyExtractor = useCallback((_, index) => `${index}`, []);

  const renderItem = useCallback(
    ({ item }) => <GroupCategoryBarItem {...item} />,
    []
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    paddingHorizontal: 6,
  },
});

export default GroupCategoryBar;
