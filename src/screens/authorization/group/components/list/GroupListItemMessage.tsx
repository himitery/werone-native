import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { LightTheme } from '@constants/color';

interface GroupListItemMessageProps {
  message: string;
}

const GroupListItemMessage: React.FC<GroupListItemMessageProps> = ({
  message,
}) => {
  return <Text style={styles.message}>{message}</Text>;
};

const styles = StyleSheet.create({
  message: {
    fontWeight: '400',
    fontSize: 16,
    color: LightTheme.TEXT,
    marginTop: 10,
  },
});

export default GroupListItemMessage;
