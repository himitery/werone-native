import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { LightTheme } from '@constants/color';
import meApi from '@api/user/me.api';
import Conditional from '@hocs/Conditional';

const UserInfo: React.VFC = () => {
  const { data } = meApi();

  return (
    <View style={styles.container}>
      <Conditional condition={!!data}>
        <View>
          <Text style={styles.title}>
            {`단국대학교\n`}
            <Text
              style={styles.admissionYear}
            >{`${data?.entranceYear}학번`}</Text>
            {` ${data?.name}님\n안녕하세요 :)`}
          </Text>
        </View>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={require('../../images/people_minified.png')}
            resizeMode={'contain'}
          />
        </View>
      </Conditional>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    lineHeight: 30,
  },
  admissionYear: {
    color: LightTheme.MAIN,
    marginRight: 10,
  },
  imageView: {
    position: 'absolute',
    width: 300,
    height: 180,
    right: 0,
  },
  image: {
    width: 300,
    height: 180,
    top: 0,
    right: -70,
  },
});

export default UserInfo;
