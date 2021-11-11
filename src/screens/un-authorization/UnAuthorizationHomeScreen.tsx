import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { StackNavigationOptions } from '@react-navigation/stack';

import { LightTheme } from '@constants/color';
import SafeView from '@components/common/SafeView';
import KakaoLoginButton from '@screens/un-authorization/components/KakaoLoginButton';
import NaverLoginButton from '@screens/un-authorization/components/NaverLoginButton';

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
          height={360}
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
    width: '100%',
    height: 360,
  },
});

export default UnAuthorizationHomeScreen;
