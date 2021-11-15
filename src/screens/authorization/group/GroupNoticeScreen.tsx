import React, { useCallback, useEffect } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import {
  RouteProp,
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { GroupStackParamList } from '@navigations/stack/authorization/GroupStackNavigator';
import { GroupNavigations } from '@constants/navigations';
import SafeView from '@components/common/SafeView';
import { LightTheme } from '@constants/color';
import {
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';
import CustomHeaderBackButton from '@components/header/CustomHeaderBackButton';
import { useSetRecoilState } from 'recoil';
import { bottomBarVisibleStore } from '@stores/recoil/bottom-bar-visible.store';

type routeProps = RouteProp<GroupStackParamList, GroupNavigations.GroupNotice>;

type navigationProps = StackNavigationProp<
  GroupStackParamList,
  GroupNavigations.GroupNotice
>;

export const GroupNoticeScreenOptions: StackNavigationOptions = {
  headerTitleAlign: 'center',
  headerBackTitleVisible: false,
  headerLeft: (props) => <CustomHeaderBackButton props={props} />,
};

const GroupNoticeScreen: React.VFC = () => {
  const {
    params: { title, content },
  } = useRoute<routeProps>();

  const navigation = useNavigation<navigationProps>();

  const setBottomBarVisible = useSetRecoilState<boolean>(bottomBarVisibleStore);

  useFocusEffect(
    useCallback(() => {
      setBottomBarVisible(false);
    }, [])
  );

  useEffect(() => {
    navigation.setOptions({
      title,
    });
  }, [title]);

  return (
    <SafeView style={styles.safeContainer}>
      <ScrollView style={styles.container} bounces={false}>
        <Text style={styles.content}>{content}</Text>
      </ScrollView>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: LightTheme.BACK_GROUND,
  },
  container: {
    padding: 40,
  },
  content: {
    fontWeight: '400',
    fontSize: 14,
    color: LightTheme.TEXT,
  },
});

export default GroupNoticeScreen;
