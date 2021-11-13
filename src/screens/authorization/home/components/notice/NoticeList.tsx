import React, { useCallback, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LightTheme } from '@constants/color';
import Notice from '@api/domain/notice';
import NoticeItem from '@screens/authorization/home/components/notice/NoticeItem';

const NoticeList = () => {
  const notices = useMemo<Notice[]>(
    () => [
      {
        id: 1,
        title: '2학기 중간고사 간식 행사',
        profileUrl: 'https:',
      },
      {
        id: 2,
        title: '2학기 중간고사 야식 행사',
        profileUrl: 'https:',
      },
    ],
    []
  );

  const renderItem = useCallback(
    ({ id, title }) => <NoticeItem id={id} title={title} />,
    []
  );

  return (
    <View>
      <Text style={styles.title}>
        소프트웨어학과 <Text style={styles.primaryTxt}> 공지</Text>
      </Text>
      {notices.map(renderItem)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
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

export default NoticeList;
