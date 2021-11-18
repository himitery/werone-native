import React, { useCallback } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LightTheme } from '@constants/color';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainBottomTabParamList } from '@navigations/tab/MainBottomStackNavigator';
import { GroupNavigations, MainNavigations } from '@constants/navigations';

type navigationProp = StackNavigationProp<
  MainBottomTabParamList,
  MainNavigations.MainHome
>;

interface HotGroupItemProps {
  id: number;
  title: string;
  groupImageUrl: string;
  memberCount: number;
}

const HotGroupItem: React.FC<HotGroupItemProps> = ({
  id,
  title,
  groupImageUrl,
  memberCount,
}) => {
  const navigaiton = useNavigation<navigationProp>();

  const handleOnPress = useCallback(() => {
    navigaiton.dispatch({
      ...CommonActions.navigate(MainNavigations.MainGroup, {
        initial: false,
        screen: GroupNavigations.GroupDetail,
        params: {
          groupId: id,
        },
      }),
    });
  }, [navigaiton, id]);

  return (
    <TouchableOpacity onPress={handleOnPress}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: groupImageUrl }}
          width={130}
          height={130}
          resizeMode={'contain'}
        />
        <Text style={styles.cardTitle} numberOfLines={1} lineBreakMode={'tail'}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: LightTheme.BORDER_LINE,
    alignItems: 'center',
  },
  image: {
    width: 130,
    height: 130,
  },
  cardTitle: {
    maxWidth: 110,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default HotGroupItem;
