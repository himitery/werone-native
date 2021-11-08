import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import CustomCard from '@components/common/CustomCard';
import { LightTheme } from '@constants/color';

const HotGroup = () => {
  const data = [
    {
      id: 1,
      title: '도서관 스터디 ..',
      imageUrl: 'http://img.khan.co.kr/newsmaker/1377/1377_58.jpg',
    },
    {
      id: 2,
      title: '도서관 스터디 ..',
      imageUrl: 'http://img.khan.co.kr/newsmaker/1377/1377_58.jpg',
    },
    {
      id: 3,
      title: '도서관 스터디 ..',
      imageUrl: 'http://img.khan.co.kr/newsmaker/1377/1377_58.jpg',
    },
  ];

  const Item = ({ id, title, imageUrl }) => (
    <CustomCard style={styles.card}>
      <Image
        style={styles.image}
        source={{ uri: imageUrl }}
        resizeMode={'contain'}
      />
      <Text style={styles.cardTitle}>{title}</Text>
    </CustomCard>
  );

  const renderItem = ({ item }) => (
    <Item id={item.id} title={item.title} imageUrl={item.imageUrl} />
  );

  return (
    <View>
      <Text style={styles.title}>
        실시간 <Text style={styles.primaryTxt}>HOT</Text> 그룹
      </Text>
      <FlatList
        style={styles.container}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
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

export default HotGroup;
