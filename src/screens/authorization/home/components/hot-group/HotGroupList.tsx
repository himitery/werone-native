import React, { useCallback, useMemo } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { LightTheme } from '@constants/color';
import HotGroupItem from '@screens/authorization/home/components/hot-group/HotGroupItem';
import HotGroup from '@api/domain/hotGroup';

const HotGroupList = () => {
  const hotGroups = useMemo<HotGroup[]>(
    () => [
      {
        id: 11,
        title: '점심 학식 그룹',
        groupImageUrl:
          'https://mblogthumb-phinf.pstatic.net/MjAxOTA2MjJfMTgy/MDAxNTYxMjE1MDYwODQ3.BB348qXuO-vypALYl0FVCVZIzygtZB8-PyqWnVLE73Qg.0epO2_ugZ2Z26g5yVzXBvTaXskmjGbcncjNL_AwJhRYg.JPEG.gate2016/8C9A9B88-305A-4BE8-940A-5AEB6A58ABF3.jpeg?type=w800',
        memberCount: 3,
      },
      {
        id: 6,
        title: '단국대 대운동장 러닝 그룹',
        groupImageUrl:
          'http://www.dankook.ac.kr/html_repositories/old/news/notice_img/notice_071019_9.jpg',
        memberCount: 5,
      },
      {
        id: 1,
        title: '토익 900점 목표 그룹',
        groupImageUrl: 'https://vanvo.co.kr/upload/Repimg/210308004.jpg',
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
