import React, { useMemo } from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';

interface SafeViewProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const SafeView: React.FC<SafeViewProps> = ({ children, style }) => {
  const statusStyle = useMemo<StyleProp<ViewStyle>>(
    () => ({
      paddingTop: Platform.select({
        android: StatusBar.currentHeight,
        ios: 0,
      }),
    }),
    [StatusBar]
  );

  return (
    <SafeAreaView style={[styles.container, statusStyle, style]}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SafeView;
