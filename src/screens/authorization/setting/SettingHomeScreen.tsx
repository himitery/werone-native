import React from 'react';
import { StyleSheet } from 'react-native';
import { StackNavigationOptions } from '@react-navigation/stack';

import SafeView from '@components/common/SafeView';

export const SettingHomeScreenOptions: StackNavigationOptions = {};

const SettingHomeScreen: React.VFC = () => {
  return <SafeView style={styles.container}></SafeView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SettingHomeScreen;
