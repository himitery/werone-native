import React from 'react';
import {
  GestureResponderEvent,
  Image,
  ImageProps,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import Conditional from '@hocs/Conditional';
import { LightTheme } from '@constants/color';
import isKeyboardVisible from '@hooks/isKeyboardVisible';

interface CustomButtonProps {
  text: string;
  iconSource?: ImageSourcePropType;
  onPress: (event: GestureResponderEvent) => void;
  iconProps?: ImageProps;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  hideOnKeyboard?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  iconSource,
  onPress,
  iconProps,
  buttonStyle,
  textStyle,
  iconStyle,
  hideOnKeyboard = false,
}) => {
  const keyboardVisible = isKeyboardVisible();

  return (
    <Conditional condition={!hideOnKeyboard || !keyboardVisible}>
      <TouchableOpacity
        style={[styles.container, buttonStyle]}
        onPress={onPress}
        activeOpacity={0.9}
      >
        <Conditional condition={true}>
          <Image
            style={[styles.icon, iconStyle]}
            source={iconSource}
            width={20}
            height={20}
            resizeMode={'contain'}
            {...iconProps}
          />
        </Conditional>
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </TouchableOpacity>
    </Conditional>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: LightTheme.MAIN,
  },
  icon: {
    position: 'absolute',
    width: 24,
    height: 24,
    left: 20,
  },
  text: {
    fontWeight: '700',
    fontSize: 16,
    color: LightTheme.TEXT,
  },
});

export default CustomButton;
