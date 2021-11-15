import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { LightTheme } from '@constants/color';

interface UserInfoProps {
  admissionYear: string;
  name: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ admissionYear, name }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          {`단국대학교\n`}
          <Text style={styles.admissionYear}>{`${admissionYear}학번`}</Text>
          {` ${name}님\n안녕하세요 :)`}
        </Text>
      </View>
      <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={require('../../images/people_minified.png')}
          resizeMode={'contain'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
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
