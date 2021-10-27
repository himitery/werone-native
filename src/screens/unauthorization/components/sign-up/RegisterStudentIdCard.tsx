import React, { useCallback } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import CustomButton from '@components/common/CustomButton';
import { Colors, LightTheme } from '@constants/color';

interface RegisterStudentIdCardProps {
  setImage: React.Dispatch<React.SetStateAction<string>>;
}

const RegisterStudentIdCard: React.FC<RegisterStudentIdCardProps> = ({
  setImage,
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
      setImage(result['uri']);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>인증</Text>
      <Text
        style={styles.info}
      >{`* 인증완료까지 영업일 기준 최대 1일,\n   비영업일 기준 최대 3일이 소요 될 수 있습니다.`}</Text>
      <CustomButton
        text={'학생증 사진 등록하기'}
        onPress={handleOnPress}
        buttonStyle={styles.buttonContainer}
        textStyle={styles.buttonText}
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
  info: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    color: Colors.WARNNING,
    marginVertical: 10,
  },
  buttonContainer: {
    backgroundColor: LightTheme.GENERAL_BUTTON_BACK_GROUND,
  },
  buttonText: {
    color: Colors.WHITE,
  },
});

export default RegisterStudentIdCard;
