import React, { useCallback } from 'react';
import {
  Image,
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import CustomButton from '@components/common/CustomButton';
import { Colors, LightTheme } from '@constants/color';
import * as ImagePicker from 'expo-image-picker';
import Conditional from '@hocs/Conditional';

interface GroupCreateImageProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  style?: StyleProp<ViewStyle>;
}

const GroupCreateImage: React.FC<GroupCreateImageProps> = ({
  value,
  setValue,
  style,
}) => {
  const handleOnPress = useCallback(async () => {
    if (Platform.OS === 'web') return;
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      return;
    }

    const result: ImagePicker.ImagePickerResult =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });

    if (!result.cancelled) {
      setValue(result['uri']);
    }
  }, [setValue]);

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>그룹 사진</Text>
      <Conditional condition={!value}>
        <CustomButton
          text={'그룹 사진 등록하기'}
          onPress={handleOnPress}
          buttonStyle={styles.buttonContainer}
          textStyle={styles.buttonText}
        />
      </Conditional>
      <Conditional condition={!!value}>
        <Image
          style={styles.image}
          source={{ uri: value }}
          height={180}
          resizeMode={'cover'}
        />
      </Conditional>
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
  buttonContainer: {
    marginTop: 14,
    backgroundColor: LightTheme.GENERAL_BUTTON_BACK_GROUND,
  },
  buttonText: {
    color: Colors.WHITE,
  },
  image: {
    height: 180,
    borderRadius: 6,
    marginTop: 14,
  },
});

export default GroupCreateImage;
