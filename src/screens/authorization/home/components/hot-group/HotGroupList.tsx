import React, { useCallback, useMemo } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { LightTheme } from '@constants/color';
import HotGroupItem from '@screens/authorization/home/components/hot-group/HotGroupItem';
import HotGroup from '@api/domain/hotGroup';

const HotGroupList = () => {
  const hotGroups = useMemo<HotGroup[]>(
    () => [
      {
        id: 1,
        title: '도서관 스터디 ..',
        groupImageUrl: 'http://img.khan.co.kr/newsmaker/1377/1377_58.jpg',
        memberCount: 3,
      },
      {
        id: 2,
        title: '도서관 스터디 ..',
        groupImageUrl: 'http://img.khan.co.kr/newsmaker/1377/1377_58.jpg',
        memberCount: 5,
      },
      {
        id: 3,
        title: '도서관 스터디 ..',
        groupImageUrl: 'http://img.khan.co.kr/newsmaker/1377/1377_58.jpg',
        memberCount: 6,
      },
    ],
    []
  );

  const renderItem = useCallback(
    ({ item: { id, title, groupImageUrl, memberCount } }) => (
      <HotGroupItem
        id={id}
        title={title}
        groupImageUrl={groupImageUrl}
        memberCount={memberCount}
      />
    ),
    []
  );

  return (
    <View>
      <Text style={styles.title}>
        실시간 <Text style={styles.primaryTxt}>HOT</Text> 그룹
      </Text>
      <FlatList
        style={styles.container}
        data={hotGroups}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.id}`}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 30,
    flex: 1,
  },
  card: {
    height: 140,
    paddingVertical: -10,
    paddingHorizontal: -20,
    marginRight: 10,
  },
  image: {
    flex: 1,
    marginTop: -10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  cardTitle: {
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    marginTop: 25,
    fontWeight: 'bold',
  },
  primaryTxt: {
    color: LightTheme.MAIN,
  },
});

export default HotGroupList;
