import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { Colors, LightTheme } from '@constants/color';
import CustomCard from '@components/common/CustomCard';

const Alarm = () => {
  const data = [
    {
      id: 1,
      category: '개인톡',
      text: '내용',
      date: '2021-11-09',
    },
    {
      id: 2,
      category: '개인톡',
      text: '내용',
      date: '2021-11-09',
    },
    {
      id: 3,
      category: '개인톡',
      text: '내용',
      date: '2021-11-09',
    },
  ];

  const Item = ({ id, category, text, date }) => (
    <View style={styles.alarm}>
      <Image
        style={styles.alarmImage}
        source={{
          uri: 'https://avatars.githubusercontent.com/u/31758135?v=4',
        }}
      />
      <View style={styles.alarmContent}>
        <Text style={styles.alarmCategory}>{category}</Text>
        <Text style={styles.alarmTxt}>{text}</Text>
        <Text style={styles.alarmDate}>{date}</Text>
      </View>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item
      id={item.id}
      category={item.category}
      text={item.text}
      date={item.date}
    />
  );

  return (
    <CustomCard style={styles.alarm}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
      />
    </CustomCard>
  );
};

const styles = StyleSheet.create({
  alarm: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  alarmImage: {
    width: 70,
    height: 70,
    borderRadius: 5,
  },
  alarmContent: {
    paddingLeft: 10,
    paddingTop: 5,
  },
  alarmCategory: {
    color: LightTheme.MAIN,
    fontWeight: 'bold',
  },
  alarmTxt: {
    fontWeight: 'bold',
    paddingTop: 5,
  },
  alarmDate: {
    color: Colors.GRAY,
    fontWeight: 'bold',
    fontSize: 12,
    paddingTop: 5,
  },
});

export default Alarm;
