import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import CustomCard from '@components/common/CustomCard';
import { LightTheme } from '@constants/color';

const Notice = () => {
  const data = [
    {
      id: 1,
      content: '2학기 중간고사 간식 행사',
    },
    {
      id: 2,
      content: '2학기 중간고사 야식 행사',
    },
  ];

  const Item = ({ id, content }) => (
    <CustomCard style={styles.container}>
      <Text>📌 {content}</Text>
    </CustomCard>
  );

  const renderItem = ({ item }) => <Item id={item.id} content={item.content} />;

  return (
    <View>
      <Text style={styles.title}>
        소프트웨어학과 <Text style={styles.primaryTxt}> 공지</Text>
      </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
      />
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

export default Notice;
