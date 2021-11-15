import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LightTheme } from '@constants/color';
import NoticeItem from '@screens/authorization/home/components/notice/NoticeItem';
import getMajorInfoApi from '@api/major/get-major-info.api';

const NoticeList: React.VFC = () => {
  const { data } = getMajorInfoApi();

  const renderItem = useCallback(
    ({ id, title }) => <NoticeItem id={id} title={title} />,
    []
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        소프트웨어학과 <Text style={styles.primaryTxt}> 공지</Text>
      </Text>
      {data?.notices.map(renderItem)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  primaryTxt: {
    color: LightTheme.MAIN,
  },
});

export default NoticeList;
