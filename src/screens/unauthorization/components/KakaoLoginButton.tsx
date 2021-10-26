import React, { useCallback } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { UnAuthorizationStackParamList } from '@navigations/stack/UnAuthorizationStackNavigator';
import { UnAuthorizationNavigations } from '@constants/navigations';

type navigationProp = NavigationProp<
  UnAuthorizationStackParamList,
  UnAuthorizationNavigations.Home
>;

const KakaoLoginButton: React.VFC = () => {
  const navigation = useNavigation<navigationProp>();

  const handleOnPress = useCallback(() => {
    navigation.navigate(UnAuthorizationNavigations.Kakao);
  }, [navigation]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleOnPress}
      activeOpacity={1}
    >
      <Image
        style={styles.image}
        source={require('../images/kakao-login-button.png')}
        resizeMode={'contain'}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 55,
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: 55,
  },
});

export default KakaoLoginButton;
