import React, { useMemo } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Category from '@api/domain/category';
import { LightTheme } from '@constants/color';

interface GroupCategoryBarItemProps extends Category {}

const GroupCategoryBarItem: React.FC<GroupCategoryBarItemProps> = ({
  category,
  color,
  opacity,
}) => {
  const containerStyle = useMemo<StyleProp<ViewStyle>>(
    () => ({
      backgroundColor: color + '4f',
    }),
    [color, opacity]
  );

  return (
    <TouchableOpacity>
      <View style={[styles.container, containerStyle]}>
        <Text style={styles.text}>{category}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    marginHorizontal: 3,
  },
  text: {
    fontWeight: '700',
    fontSize: 16,
    color: LightTheme.TEXT,
  },
});

export default GroupCategoryBarItem;
