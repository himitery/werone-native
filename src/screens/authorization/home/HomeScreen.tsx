import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { StackNavigationOptions } from '@react-navigation/stack';
import SafeView from '@components/common/SafeView';

export const HomeScreenOptions: StackNavigationOptions = {
  headerLeft: () => <></>,
};

const HomeScreen: React.VFC = () => {
  return (
    <SafeView style={styles.container}>
      <Text>Home Screen</Text>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
