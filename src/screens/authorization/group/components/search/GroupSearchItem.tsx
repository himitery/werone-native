import React, { useCallback } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Week from '@api/domain/week';
import getKoreanWeek from '@utils/getKoreanWeek';
import { LightTheme } from '@constants/color';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { GroupStackParamList } from '@navigations/stack/authorization/GroupStackNavigator';
import { GroupNavigations } from '@constants/navigations';

interface GroupSearchItemProps {
  navigation: StackNavigationProp<
    GroupStackParamList,
    GroupNavigations.GroupSearch
  >;
  id: number;
  title: string;
  groupImageUrl: string;
  week: Week;
  memberCount: number;
}

const GroupSearchItem: React.FC<GroupSearchItemProps> = ({
  navigation,
  id,
  title,
  groupImageUrl,
  week,
  memberCount,
}) => {
  const handleOnPress = useCallback(() => {
    navigation.push(GroupNavigations.GroupDetail, { groupId: id });
  }, [navigation, id]);

  return (
    <TouchableOpacity onPress={handleOnPress} activeOpacity={0.7}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: groupImageUrl }}
          width={120}
          height={80}
          resizeMode={'cover'}
        />

        <View style={styles.rightContainer}>
          <View style={styles.weekContainer}>
            <Text style={styles.weekText}>
              {getKoreanWeek(week).slice(0, 1)}
            </Text>
          </View>

          <Text style={styles.title}>{title}</Text>

          <View style={styles.memberCountContainer}>
            <Ionicons
              name="ios-people-outline"
              size={16}
              color={LightTheme.INACTIVE}
            />
            <Text style={styles.memberCountText}>{memberCount}명</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 80,
    marginVertical: 10,
  },
  image: {
    width: 120,
    height: 80,
    borderRadius: 6,
  },
  rightContainer: {
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  weekContainer: {
    width: 22,
    height: 22,
    borderRadius: 100,
    marginRight: 4,
    justifyContent: 'center',
    opacity: 0.7,
    backgroundColor: LightTheme.MAIN,
  },
  weekText: {
    fontWeight: '700',
    fontSize: 12,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: LightTheme.TEXT,
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
    color: LightTheme.TEXT,
  },
  memberCountContainer: {
    flexDirection: 'row',
  },
  memberCountText: {
    fontWeight: '700',
    fontSize: 16,
    opacity: 0.7,
    color: LightTheme.INACTIVE,
    marginLeft: 6,
  },
});

export default GroupSearchItem;
