import React, { useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LightTheme } from '@constants/color';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { GroupStackParamList } from '@navigations/stack/authorization/GroupStackNavigator';
import { GroupNavigations, MainNavigations } from '@constants/navigations';

type navigationProp = StackNavigationProp<
  GroupStackParamList,
  GroupNavigations.GroupNotice
>;

interface MessageBoxProps {
  title: string;
  content: string;
}

const MessageBox: React.FC<MessageBoxProps> = ({ title, content }) => {
  const navigation = useNavigation<navigationProp>();

  const handleOnPress = useCallback(() => {
    navigation.dispatch({
      ...CommonActions.navigate(MainNavigations.MainGroup, {
        initial: false,
        screen: GroupNavigations.GroupNotice,
        params: {
          title,
          content,
        },
      }),
    });
  }, [navigation, title, content]);

  return (
    <TouchableOpacity onPress={handleOnPress}>
      <View style={styles.container}>
        <Text style={styles.message}>{`📌 ${title}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: LightTheme.BORDER_LINE,
    borderRadius: 6,
    marginVertical: 6,
    justifyContent: 'center',
  },
  message: {
    fontWeight: '400',
    fontSize: 16,
    textAlignVertical: 'center',
    color: LightTheme.TEXT,
  },
});

export default MessageBox;
