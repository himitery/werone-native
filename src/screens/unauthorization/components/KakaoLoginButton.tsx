import React, { useCallback } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

const KakaoLoginButton: React.VFC = () => {
  const handleOnPress = useCallback(() => {}, []);

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
