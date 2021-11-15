import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';

interface KeyboardAvoidViewProps {
  children: React.ReactNode;
  style: StyleProp<ViewStyle>;
}

const KeyboardAvoidView: React.FC<KeyboardAvoidViewProps> = ({
  children,
  style,
}) => {
  const headerHeight = useHeaderHeight() || 0;

  return (
    <KeyboardAvoidingView
      style={style}
      behavior={Platform.select({
        android: 'height',
        ios: 'padding',
      })}
      keyboardVerticalOffset={Platform.select({
        android: -1000,
        ios: headerHeight,
      })}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidView;
