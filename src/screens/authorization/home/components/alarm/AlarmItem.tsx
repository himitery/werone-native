import React, { useCallback } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors, LightTheme } from '@constants/color';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { GroupNavigations, MainNavigations } from '@constants/navigations';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainBottomTabParamList } from '@navigations/tab/MainBottomStackNavigator';

type navigationProp = StackNavigationProp<
  MainBottomTabParamList,
  MainNavigations.MainHome
>;

interface AlarmItemProps {
  id: number;
  category: string;
  imageUrl: string;
  text: string;
  date: string;
}

const AlarmItem: React.FC<AlarmItemProps> = ({
  category,
  imageUrl,
  text,
  date,
}) => {
  const navigation = useNavigation<navigationProp>();

  const handleOnPress = useCallback(() => {
    navigation.dispatch({
      ...CommonActions.navigate(MainNavigations.MainGroup, {
        initial: false,
        screen: GroupNavigations.GroupList,
      }),
    });
  }, [navigation]);

  return (
    <TouchableOpacity onPress={handleOnPress}>
      <View style={styles.alarm}>
        <Image style={styles.alarmImage} source={{ uri: imageUrl }} />
        <View style={styles.alarmContent}>
          <Text style={styles.alarmCategory}>{category}</Text>
          <Text style={styles.alarmTxt}>{text}</Text>
          <Text style={styles.alarmDate}>{date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  alarm: {
    flexDirection: 'row',
    marginVertical: 10,
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

export default AlarmItem;
