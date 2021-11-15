import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LightTheme } from '@constants/color';
import getMajorInfoApi from '@api/major/get-major-info.api';
import MessageBox from '@components/common/MessageBox';

const NoticeList: React.VFC = () => {
  const { data } = getMajorInfoApi();

  const renderItem = useCallback(
    ({ id, title, content }) => (
      <MessageBox key={id} title={title} content={content} />
    ),
    []
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        소프트웨어학과 <Text style={styles.primaryTxt}> 공지</Text>
      </Text>
      {data?.notices?.map(renderItem)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
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
