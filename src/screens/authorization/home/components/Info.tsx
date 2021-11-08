import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { LightTheme } from '@constants/color';

interface DescriptionProps {
  schoolName: string;
  userName: string;
  admissionYear: string;
}

const Info: React.FC<DescriptionProps> = ({
  schoolName,
  userName,
  admissionYear,
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          {`${schoolName}\n`}
          <Text style={styles.admissionYear}>{`${admissionYear}학번 `} </Text>
          {`${userName}님\n안녕하세요 :)`}
        </Text>
      </View>
      <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={require('../images/people_minified.png')}
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

export default Info;
