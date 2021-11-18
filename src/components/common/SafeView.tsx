import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { LightTheme } from '@constants/color';

interface SafeViewProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const SafeView: React.FC<SafeViewProps> = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.select({
      android: StatusBar.currentHeight,
      ios: 0,
    }),
    backgroundColor: LightTheme.BACK_GROUND,
  },
});

export default SafeView;
