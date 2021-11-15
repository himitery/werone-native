import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import CustomCard from '@components/common/CustomCard';

interface HotGroupItemProps {
  id: number;
  title: string;
  groupImageUrl: string;
  memberCount: number;
}

const HotGroupItem: React.FC<HotGroupItemProps> = ({
  title,
  groupImageUrl,
  memberCount,
}) => {
  return (
    <CustomCard style={styles.card}>
      <Image
        style={styles.image}
        source={{ uri: groupImageUrl }}
        resizeMode={'contain'}
      />
      <Text style={styles.cardTitle}>{title}</Text>
    </CustomCard>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 140,
    paddingVertical: -10,
    paddingHorizontal: -20,
    marginRight: 10,
  },
  image: {
    flex: 1,
    marginTop: -10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  cardTitle: {
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});

export default HotGroupItem;
