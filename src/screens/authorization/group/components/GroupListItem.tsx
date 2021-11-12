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
import GroupListItemMessage from '@screens/authorization/group/components/GroupListItemMessage';
import { useNavigation } from '@react-navigation/native';
import { GroupStackParamList } from '@navigations/stack/authorization/GroupStackNavigator';
import { GroupNavigations } from '@constants/navigations';
import { StackNavigationProp } from '@react-navigation/stack';

type navigationProp = StackNavigationProp<
  GroupStackParamList,
  GroupNavigations.GroupList
>;

interface GroupListItemProps {
  id: number;
  imageUrl: string;
  name: string;
  message: string[];
}

const GroupListItem: React.FC<GroupListItemProps> = ({
  id,
  imageUrl,
  name,
  message,
}) => {
  const navigation = useNavigation<navigationProp>();

  const handleOnPress = useCallback(() => {
    navigation.push(GroupNavigations.GroupDetail, { groupId: id });
  }, [id]);

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
            source={{ uri: imageUrl }}
            width={44}
            height={44}
            resizeMode={'cover'}
          />
          <Text style={styles.name}>{name}</Text>
        </View>
        <FlatList<string>
          data={message}
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
    marginRight: 10,
  },
  name: {
    fontWeight: '700',
    fontSize: 20,
    color: LightTheme.TEXT,
  },
});

export default GroupListItem;
