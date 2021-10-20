import React, { useCallback } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '@constants/color';

const NaverLoginButton: React.VFC = () => {
  const handleOnPress = useCallback(() => {}, []);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleOnPress}
      activeOpacity={1}
    >
      <Image
        style={styles.image}
        source={require('../images/naver-icon.png')}
        resizeMode={'contain'}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>네이버 아이디로 로그인</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 55,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: Colors.NAVER,
  },
  image: {
    width: 46,
    height: 46,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '400',
    fontSize: 18,
    left: -12,
    color: Colors.NAVER_TEXT,
  },
});

export default NaverLoginButton;
