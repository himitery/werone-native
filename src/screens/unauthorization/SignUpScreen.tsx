import React, { useCallback, useState } from 'react';
import {
  BackHandler,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StackNavigationOptions } from '@react-navigation/stack';

import SafeView from '@components/common/SafeView';
import CustomTextInput from '@components/common/CustomTextInput';
import RegisterStudentIdCard from '@screens/unauthorization/components/sign-up/RegisterStudentIdCard';
import CustomButton from '@components/common/CustomButton';
import { Colors } from '@constants/color';
import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import { UnAuthorizationStackParamList } from '@navigations/stack/UnAuthorizationStackNavigator';
import { UnAuthorizationNavigations } from '@constants/navigations';

export const SignUpScreenOptions: StackNavigationOptions = {
  headerShown: false,
  gestureEnabled: false,
};

type navigationProp = NavigationProp<
  UnAuthorizationStackParamList,
  UnAuthorizationNavigations.SignUp
>;

const SignUpScreen: React.VFC = () => {
  const navigation = useNavigation<navigationProp>();

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [image, setImage] = useState<string>('');

  useFocusEffect(
    useCallback(() => {
      const hardwareBackPress = () => true;

      BackHandler.addEventListener('hardwareBackPress', hardwareBackPress);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', hardwareBackPress);
      };
    }, [])
  );

  const handleSignUp = useCallback(() => {}, []);

  return (
    <SafeView>
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>회원가입</Text>
          </View>
          <CustomTextInput
            title={'이름'}
            value={name}
            setValue={setName}
            style={styles.textInputContainer}
          />
          <CustomTextInput
            title={'이메일'}
            value={email}
            setValue={setEmail}
            style={styles.textInputContainer}
          />
          <RegisterStudentIdCard setImage={setImage} />
        </ScrollView>
        <CustomButton
          text={'가입하기'}
          onPress={handleSignUp}
          buttonStyle={styles.signUpButtonContainer}
          textStyle={styles.signUpButtonText}
          hideOnKeyboard={true}
        />
      </View>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  scrollContainer: {
    width: '100%',
  },
  titleContainer: {
    marginVertical: 30,
  },
  title: {
    fontWeight: '400',
    fontSize: 36,
    lineHeight: 42,
  },
  textInputContainer: {
    marginBottom: 28,
  },
  signUpButtonContainer: {
    position: 'absolute',
    bottom: Platform.select({
      android: StatusBar.currentHeight,
      ios: 0,
    }),
  },
  signUpButtonText: {
    color: Colors.WHITE,
  },
});

export default SignUpScreen;
