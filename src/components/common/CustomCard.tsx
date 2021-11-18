import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { LightTheme } from '@constants/color';

interface CustomCardProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const CustomCard: React.FC<CustomCardProps> = ({ children, style }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.card, style]}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  card: {
    borderWidth: 1,
    borderColor: LightTheme.BORDER_LINE,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: LightTheme.BACK_GROUND,
  },
});

export default CustomCard;
