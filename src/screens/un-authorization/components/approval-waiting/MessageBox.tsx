import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LightTheme } from '@constants/color';

interface MessageBoxProps {
  title: string;
  content: string;
}

const MessageBox: React.FC<MessageBoxProps> = ({ title, content }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>{`💡`}</Text>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 22,
    paddingVertical: 18,
    borderRadius: 6,
    marginVertical: 8,
    backgroundColor: LightTheme.BOX_BACK_GROUND,
  },
  icon: {
    marginRight: 6,
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    color: LightTheme.TEXT,
  },
  content: {
    fontWeight: '400',
    fontSize: 16,
    color: LightTheme.TEXT,
    marginTop: 10,
  },
});

export default MessageBox;
