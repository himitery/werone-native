import React, { useCallback } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import {
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';
import CustomHeaderBackButton from '@components/header/CustomHeaderBackButton';
import { useSetRecoilState } from 'recoil';
import { bottomBarVisibleStore } from '@stores/recoil/bottom-bar-visible.store';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import SafeView from '@components/common/SafeView';
import { Colors, LightTheme } from '@constants/color';
import GroupCategoryBar from '@screens/authorization/group/components/category/GroupCategoryBar';
import getGroupAllApi from '@api/group/get-group-all.api';
import CustomButton from '@components/common/CustomButton';
import { GroupStackParamList } from '@navigations/stack/authorization/GroupStackNavigator';
import { GroupNavigations } from '@constants/navigations';
import GroupSearchItem from '@screens/authorization/group/components/search/GroupSearchItem';

type navigationProp = StackNavigationProp<
  GroupStackParamList,
  GroupNavigations.GroupSearch
>;

export const GroupSearchScreenOptions: StackNavigationOptions = {
  title: '그룹 목록',
  headerTitleAlign: 'left',
  headerLeft: (props) => <CustomHeaderBackButton props={props} />,
  headerBackTitleVisible: false,
};

const GroupSearchScreen: React.VFC = () => {
  const setBottomBarVisible = useSetRecoilState<boolean>(bottomBarVisibleStore);

  const navigation = useNavigation<navigationProp>();

  const { data } = getGroupAllApi();

  useFocusEffect(
    useCallback(() => {
      setBottomBarVisible(false);
    }, [])
  );

  const keyExtractor = useCallback((item) => item.id, []);

  const renderItem = useCallback(
    ({ item }) => (
      <GroupSearchItem
        navigation={navigation}
        id={item.id}
        title={item.title}
        groupImageUrl={item.groupImageUrl}
        week={item.dayOfWeek}
        memberCount={item.numParticipants}
      />
    ),
    []
  );

  const listHeaderComponent = useCallback(() => <GroupCategoryBar />, []);

  const handleOnPress = useCallback(() => {
    navigation.push(GroupNavigations.GroupCreate);
  }, [navigation]);

  return (
    <SafeView style={styles.safeContainer}>
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          ListHeaderComponent={listHeaderComponent}
          bounces={false}
          showsVerticalScrollIndicator={false}
        />
        <CustomButton
          text={'그룹 생성하기'}
          onPress={handleOnPress}
          buttonStyle={styles.buttonContainer}
          textStyle={styles.buttonText}
        />
      </View>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: LightTheme.BACK_GROUND,
  },
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingBottom: 60,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  buttonText: {
    color: Colors.WHITE,
  },
});

export default GroupSearchScreen;
