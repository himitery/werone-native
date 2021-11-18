import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ScrollView, StyleSheet, TextInputProps } from 'react-native';
import {
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';
import { useSetRecoilState } from 'recoil';
import { bottomBarVisibleStore } from '@stores/recoil/bottom-bar-visible.store';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import CustomHeaderBackButton from '@components/header/CustomHeaderBackButton';
import SafeView from '@components/common/SafeView';
import CustomTextInput from '@components/common/CustomTextInput';
import GroupCreateImage from '@screens/authorization/group/components/create/GroupCreateImage';
import CustomButton from '@components/common/CustomButton';
import { Colors } from '@constants/color';
import groupCreateApi from '@api/group/group-create.api';
import { GroupStackParamList } from '@navigations/stack/authorization/GroupStackNavigator';
import { GroupNavigations } from '@constants/navigations';
import KeyboardAvoidView from '@components/common/KeyboardAvoidView';
import GroupCreateWeek from '@screens/authorization/group/components/create/GroupCreateWeek';
import Week from '@api/domain/week';

type navigationProp = StackNavigationProp<
  GroupStackParamList,
  GroupNavigations.GroupCreate
>;

export const GroupCreateScreenOptions: StackNavigationOptions = {
  title: '그룹 만들기',
  headerLeft: (props) => <CustomHeaderBackButton props={props} />,
  headerLeftLabelVisible: false,
};

const GroupCreateScreen: React.VFC = () => {
  const navigation = useNavigation<navigationProp>();

  const setBottomBarVisible = useSetRecoilState<boolean>(bottomBarVisibleStore);

  const [name, setName] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [condition, setCondition] = useState<string>('');
  const [place, setPlace] = useState<string>('');
  const [week, setWeek] = useState<Week>(null);
  const [buttonStatus, setButtonStatus] = useState<boolean>(false);

  const multilineProps = useMemo<TextInputProps>(
    () => ({
      multiline: true,
    }),
    []
  );

  useFocusEffect(
    useCallback(() => {
      setBottomBarVisible(false);
    }, [])
  );

  useEffect(() => {
    setButtonStatus(
      !!name && !!image && !!description && !!condition && !!place && !!week
    );
  }, [name, image, description, condition, place, week, setButtonStatus]);

  const handleOnPress = useCallback(async () => {
    try {
      if (!name || !image || !description || !condition || !place || !week)
        return;

      setButtonStatus(false);
      await groupCreateApi({
        name,
        image,
        description,
        condition,
        place,
        week,
      });
      setButtonStatus(true);

      navigation.goBack();
    } catch (e) {
      console.group(`[Group Create Error]`);
      console.log(e);
      console.groupEnd();
      setButtonStatus(true);
    }
  }, [
    navigation,
    name,
    image,
    description,
    condition,
    place,
    week,
    setButtonStatus,
  ]);

  return (
    <SafeView style={styles.safeContainer}>
      <KeyboardAvoidView style={styles.avoidingKeyboardContainer}>
        <ScrollView
          style={styles.container}
          bounces={false}
          showsVerticalScrollIndicator={false}
        >
          <CustomTextInput
            style={styles.itemContainer}
            title={'그룹명'}
            value={name}
            setValue={setName}
          />
          <GroupCreateImage
            style={styles.itemContainer}
            value={image}
            setValue={setImage}
          />
          <CustomTextInput
            style={styles.itemContainer}
            inputStyle={styles.descriptionContainer}
            title={'그룹 설명'}
            value={description}
            setValue={setDescription}
            props={multilineProps}
          />
          <CustomTextInput
            style={styles.itemContainer}
            title={'가입 조건'}
            value={condition}
            setValue={setCondition}
          />
          <CustomTextInput
            style={styles.itemContainer}
            title={'장소'}
            value={place}
            setValue={setPlace}
          />
          <GroupCreateWeek
            style={styles.itemContainer}
            value={week}
            setValue={setWeek}
          />
          <CustomButton
            text={'개설하기'}
            onPress={handleOnPress}
            buttonStyle={styles.itemContainer}
            textStyle={styles.buttonText}
            disabled={!buttonStatus}
          />
        </ScrollView>
      </KeyboardAvoidView>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  avoidingKeyboardContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  itemContainer: {
    flex: 1,
    marginTop: 20,
  },
  descriptionContainer: {
    height: 100,
  },
  buttonText: {
    color: Colors.WHITE,
  },
});

export default GroupCreateScreen;
