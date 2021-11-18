import React from 'react';
import { StyleSheet, Text } from 'react-native';
import CustomCard from '@components/common/CustomCard';

interface NoticeItemProps {
  id: number;
  title: string;
}

const NoticeItem: React.FC<NoticeItemProps> = ({ id, title }) => {
  return (
    <CustomCard style={styles.container}>
      <Text>📌 {title}</Text>
    </CustomCard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    padding: 0,
  },
});

export default NoticeItem;
