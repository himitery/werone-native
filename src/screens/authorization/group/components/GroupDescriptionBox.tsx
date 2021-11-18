import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LightTheme } from '@constants/color';

interface GroupDescriptionBoxProps {
  description: string;
}

const GroupDescriptionBox: React.FC<GroupDescriptionBoxProps> = ({
  description,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`⭐ 우리 그룹은요!`}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    borderRadius: 6,
    backgroundColor: LightTheme.BOX_BACK_GROUND,
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    color: LightTheme.TEXT,
    marginBottom: 14,
  },
  description: {
    fontWeight: '400',
    fontSize: 18,
    color: LightTheme.TEXT,
  },
});

export default GroupDescriptionBox;
