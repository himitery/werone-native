import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import WebView, { WebViewMessageEvent } from 'react-native-webview';

import SafeView from '@components/common/SafeView';
import { KAKAO_API_URL, KAKAO_REDIRECT_URL } from '@/api';
import { StackNavigationOptions } from '@react-navigation/stack';
import kakaoLoginApi from '@api/auth/kakao/kakao-login.api';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { UnAuthorizationStackParamList } from '@navigations/stack/UnAuthorizationStackNavigator';
import { UnAuthorizationNavigations } from '@constants/navigations';
import instance from '@config/axios';
import { useSetRecoilState } from 'recoil';
import { Token } from '@stores/repositories/TokenRepository';
import tokenSelector from '@stores/recoil/token.store';
import PlatformType from '@api/domain/platformType';

export const KakaoLoginScreenOptions: StackNavigationOptions = {};

type navigationProp = NavigationProp<
  UnAuthorizationStackParamList,
  UnAuthorizationNavigations.Kakao
>;

const injectedJavaScript = `window.ReactNativeWebView.postMessage("");`;

const KakaoLoginScreen: React.VFC = () => {
  const navigation = useNavigation<navigationProp>();

  const tokenStore = useSetRecoilState<Token>(tokenSelector);

  const handleOnMessage = useCallback((e: WebViewMessageEvent) => {
    const url = e.nativeEvent['url'];
    if (url.includes(`${KAKAO_REDIRECT_URL}?code=`)) {
      kakaoLoginApi({
        code: url.replace(`${KAKAO_REDIRECT_URL}?code=`, ''),
      }).then(({ data }) => {
        if (data?.isUser) {
          tokenStore({
            accessToken: data.token.accessToken,
            refreshToken: data.token.refreshToken,
          });
          instance.defaults.headers.common['authorization'] =
            data?.token.accessToken;
        } else {
          navigation.navigate(UnAuthorizationNavigations.SignUp, {
            email: data.oauth.email,
            platformId: data.oauth.platformId,
            platformType: PlatformType.KAKAO,
            profileImageUrl: data.oauth.profileImageUrl,
          });
        }
      });
    }
  }, []);

  return (
    <SafeView style={styles.container}>
      <WebView
        originWhitelist={['*']}
        scalesPageToFit={false}
        source={{ uri: KAKAO_API_URL }}
        injectedJavaScript={injectedJavaScript}
        onMessage={handleOnMessage}
      />
    </SafeView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default KakaoLoginScreen;
