import React, { useCallback } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import { LightTheme } from '@constants/color';

interface CustomTextInputProps {
  title: string;
  placeholder?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  style?: StyleProp<ViewStyle>;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  title,
  placeholder,
  value,
  setValue,
  style,
}) => {
  const handleChangeText = useCallback((text: string) => {
    setValue(text);
  }, []);

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={handleChangeText}
        placeholder={placeholder}
        selectionColor={LightTheme.MAIN}
        numberOfLines={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 18,
    color: LightTheme.TEXT,
  },
  textInput: {
    width: '100%',
    height: 46,
    paddingHorizontal: 16,
    borderRadius: 5,
    marginTop: 14,
    backgroundColor: LightTheme.INPUT_BACK_GROUND,
  },
});

export default CustomTextInput;
