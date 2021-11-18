import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LightTheme } from '@constants/color';

interface InfoBoxProps {
  info: string;
  description: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ info, description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.info}>{info}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 44,
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  info: {
    width: 80,
    fontWeight: '700',
    fontSize: 14,
    color: LightTheme.TEXT,
  },
  description: {
    fontWeight: '400',
    fontSize: 14,
    color: LightTheme.TEXT,
  },
});

export default InfoBox;
