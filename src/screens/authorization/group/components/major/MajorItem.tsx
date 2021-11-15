import React, { useCallback } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { LightTheme } from '@constants/color';
import { useNavigation } from '@react-navigation/native';
import { GroupStackParamList } from '@navigations/stack/authorization/GroupStackNavigator';
import { GroupNavigations } from '@constants/navigations';
import { StackNavigationProp } from '@react-navigation/stack';
import GroupListItemMessage from '@screens/authorization/group/components/list/GroupListItemMessage';
import getMajorInfoApi from '@api/major/get-major-info.api';

type navigationProp = StackNavigationProp<
  GroupStackParamList,
  GroupNavigations.GroupList
>;

const MajorItem: React.VFC = () => {
  const navigation = useNavigation<navigationProp>();

  const { data } = getMajorInfoApi();

  const handleOnPress = useCallback(() => {
    navigation.push(GroupNavigations.GroupMajor);
  }, []);

  const keyExtractor = useCallback((_, index) => `${index}`, []);

  const renderItem = useCallback(
    ({ item }) => <GroupListItemMessage message={item} />,
    []
  );

  return (
    <TouchableOpacity onPress={handleOnPress} activeOpacity={0.6}>
      <View style={styles.container}>
        <View style={styles.groupContainer}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://www.dankook.ac.kr/html_repositories/images/www/kor_content/est_ui_int01.jpg',
            }}
            width={44}
            height={44}
            resizeMode={'contain'}
          />
          <Text style={styles.name}>{data?.name}</Text>
        </View>
        <FlatList<string>
          data={data?.notices.map((item) => item.title)}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
    borderRadius: 6,
    borderWidth: 1,
    marginTop: 20,
    borderColor: LightTheme.BORDER_LINE,
  },
  groupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 44,
    height: 44,
    borderRadius: 6,
    marginRight: 10,
  },
  name: {
    fontWeight: '700',
    fontSize: 20,
    color: LightTheme.TEXT,
  },
});

export default MajorItem;
