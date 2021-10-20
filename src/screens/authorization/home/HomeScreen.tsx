import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { StackNavigationOptions } from '@react-navigation/stack';

export const HomeScreenOptions: StackNavigationOptions = {
  headerLeft: () => <></>,
};

const HomeScreen: React.VFC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
