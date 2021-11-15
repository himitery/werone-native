import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LightTheme } from '@constants/color';

interface MessageBoxProps {
  message: string;
}

const MessageBox: React.FC<MessageBoxProps> = ({ message }) => {
  return (
    <TouchableOpacity disabled={true}>
      <View style={styles.container}>
        <Text style={styles.message}>{`📌 ${message}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: LightTheme.BORDER_LINE,
    borderRadius: 6,
    marginVertical: 6,
    justifyContent: 'center',
  },
  message: {
    fontWeight: '400',
    fontSize: 16,
    textAlignVertical: 'center',
    color: LightTheme.TEXT,
  },
});

export default MessageBox;
