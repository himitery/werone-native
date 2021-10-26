import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { StackNavigationOptions } from '@react-navigation/stack';

import { LightTheme } from '@constants/color';
import KakaoLoginButton from '@screens/unauthorization/components/KakaoLoginButton';
import NaverLoginButton from '@screens/unauthorization/components/NaverLoginButton';
import SafeView from '@components/common/SafeView';

export const UnAuthorizationHomeScreenOptions: StackNavigationOptions = {};

const UnAuthorizationHomeScreen: React.VFC = () => {
  return (
    <SafeView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>위아원</Text>
      </View>
      <View>
        <Image
          style={styles.image}
          source={require('./images/people.png')}
          width={445}
          height={334}
          resizeMode={'contain'}
        />
        <View style={styles.buttonContainer}>
          <KakaoLoginButton />
          <NaverLoginButton />
        </View>
      </View>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: LightTheme.BACK_GROUND,
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 124,
    bottom: 50,
    paddingHorizontal: 12,
    justifyContent: 'space-between',
    backgroundColor: LightTheme.BACK_GROUND,
  },
  title: {
    fontWeight: '600',
    fontSize: 48,
    color: LightTheme.TEXT,
  },
  image: {
    width: 455,
    height: 334,
    left: -42,
  },
});

export default UnAuthorizationHomeScreen;
