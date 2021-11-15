import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { StackNavigationOptions } from '@react-navigation/stack';

import SafeView from '@components/common/SafeView';
import meApi from '@api/user/me.api';
import { Colors, LightTheme } from '@constants/color';

export const SettingHomeScreenOptions: StackNavigationOptions = {};

const SettingHomeScreen: React.VFC = () => {
  const { data } = meApi();

  return (
    <SafeView style={styles.container}>
      <View style={styles.userInfo}>
        <Image
          style={styles.profileImage}
          source={{ uri: data?.profileImageUrl }}
          width={100}
          height={100}
          resizeMode={'cover'}
        />
        <View style={styles.userInfoText}>
          <Text style={styles.schoolName}>단국대학교</Text>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{data?.name} </Text>
            <Text>{data?.birth}</Text>
          </View>
          <Text style={styles.studentId}>{`${data?.studentId}`}</Text>
          <Text style={styles.entranceYear}>{`${data?.entranceYear}학번`}</Text>
        </View>
      </View>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 18,
  },
  userInfo: {
    marginHorizontal: 30,
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomColor: Colors.LIGHT_GRAY,
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  userInfoText: {
    height: 100,
    marginHorizontal: 20,
    marginVertical: 15,
    justifyContent: 'space-between',
  },
  schoolName: {
    color: LightTheme.MAIN,
    fontSize: 18,
    marginBottom: 5,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  studentId: {
    fontSize: 16,
  },
  entranceYear: {
    fontSize: 16,
  },
});

export default SettingHomeScreen;
