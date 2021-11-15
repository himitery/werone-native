import React, { useCallback, useEffect, useMemo } from 'react';
import getMajorInfoApi from '@api/major/get-major-info.api';
import SafeView from '@components/common/SafeView';
import { Alert, Image, ScrollView, StyleSheet, View } from 'react-native';
import { Colors, LightTheme } from '@constants/color';
import InfoBox from '@screens/authorization/group/components/InfoBox';
import CustomButton from '@components/common/CustomButton';
import _ from 'lodash';
import MessageBox from '@components/common/MessageBox';
import { useSetRecoilState } from 'recoil';
import { bottomBarVisibleStore } from '@stores/recoil/bottom-bar-visible.store';
import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import { StackNavigationOptions } from '@react-navigation/stack';
import CustomHeaderBackButton from '@components/header/CustomHeaderBackButton';
import { GroupStackParamList } from '@navigations/stack/authorization/GroupStackNavigator';
import { GroupNavigations } from '@constants/navigations';

type navigationProp = NavigationProp<
  GroupStackParamList,
  GroupNavigations.GroupMajor
>;

export const MajorDetailScreenOptions: StackNavigationOptions = {
  title: '',
  headerLeft: (props) => <CustomHeaderBackButton props={props} />,
  headerBackTitleVisible: false,
};

const MajorDetailScreen: React.VFC = () => {
  const navigation = useNavigation<navigationProp>();

  const { data } = getMajorInfoApi();

  const setBottomBarVisible = useSetRecoilState<boolean>(bottomBarVisibleStore);

  const messages = useMemo<{ title: string; content: string }[]>(
    () =>
      _(data?.notices)
        .orderBy((item) => item.id, ['desc'])
        .map((item) => ({
          title: item.title,
          content: item.content,
        }))
        .value(),
    [data?.notices]
  );

  useFocusEffect(
    useCallback(() => {
      setBottomBarVisible(false);
    }, [setBottomBarVisible])
  );

  useEffect(() => {
    navigation.setOptions({
      title: data?.name,
    });
  }, [navigation, data]);

  const renderItem = useCallback(
    (item, index) => (
      <MessageBox key={index} title={item.title} content={item.content} />
    ),
    []
  );

  const handleOnPress = useCallback(() => {
    Alert.alert('위아원', '서비스 준비중입니다.');
  }, []);

  return (
    <SafeView style={styles.safeContainer}>
      <ScrollView bounces={false}>
        <Image
          style={styles.groupImage}
          source={{
            uri: 'https://www.dankook.ac.kr/html_repositories/images/www/kor_content/est_ui_int01.jpg',
          }}
          height={180}
          resizeMode={'cover'}
        />

        <View style={[styles.container, styles.topContainer]}>
          {messages.map(renderItem)}
          <InfoBox info={'위치'} description={data?.location} />
          <InfoBox info={'전화번호'} description={data?.telephoneNumber} />
          <InfoBox info={'홈페이지'} description={data?.homepageUrl} />
        </View>

        <View style={[styles.container, styles.topContainer]}>
          <InfoBox info={'학생회'} description={data?.association} />
          <InfoBox info={'학생회장'} description={data?.president} />
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <CustomButton
          text={'채팅 참가'}
          onPress={handleOnPress}
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
  groupImage: {
    height: 180,
  },
  container: {
    paddingHorizontal: 12,
  },
  topContainer: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: LightTheme.BORDER_LINE,
  },
  buttonContainer: {
    bottom: 0,
    width: '100%',
    paddingHorizontal: 12,
  },
  buttonText: {
    color: Colors.WHITE,
  },
});

export default MajorDetailScreen;
