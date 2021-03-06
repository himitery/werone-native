import React, { useCallback, useEffect, useState } from 'react';
import {
  BackHandler,
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StackNavigationOptions } from '@react-navigation/stack';
import { useSetRecoilState } from 'recoil';

import SafeView from '@components/common/SafeView';
import CustomTextInput from '@components/common/CustomTextInput';
import RegisterStudentIdCard from '@screens/un-authorization/components/sign-up/RegisterStudentIdCard';
import CustomButton from '@components/common/CustomButton';
import { Colors } from '@constants/color';
import {
  NavigationProp,
  RouteProp,
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { UnAuthorizationStackParamList } from '@navigations/stack/un-authorization/UnAuthorizationStackNavigator';
import { UnAuthorizationNavigations } from '@constants/navigations';
import signUpApi from '@api/auth/sign-up.api';
import { Token } from '@stores/repositories/TokenRepository';
import tokenSelector from '@stores/recoil/token.store';

export const SignUpScreenOptions: StackNavigationOptions = {
  gestureEnabled: false,
};

type routeProp = RouteProp<
  UnAuthorizationStackParamList,
  UnAuthorizationNavigations.SignUp
>;

type navigationProp = NavigationProp<
  UnAuthorizationStackParamList,
  UnAuthorizationNavigations.SignUp
>;

const SignUpScreen: React.VFC = () => {
  const {
    params: { email: mail, platformId, platformType, profileImageUrl },
  } = useRoute<routeProp>();
  const navigation = useNavigation<navigationProp>();
  const setToken = useSetRecoilState<Token>(tokenSelector);

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>(mail);
  const [image, setImage] = useState<string>();
  const [buttonStatus, setButtonStatus] = useState<boolean>(false);

  useFocusEffect(
    useCallback(() => {
      const hardwareBackPress = () => {
        navigation.navigate(UnAuthorizationNavigations.Home);
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', hardwareBackPress);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', hardwareBackPress);
      };
    }, [])
  );

  useEffect(() => {
    setButtonStatus(!!name && !!email && !!image);
  }, [name, email, image]);

  const handleSignUp = useCallback(async () => {
    try {
      const { token } = await signUpApi({
        name,
        email,
        idCardImage: image,
        platformId,
        platformType,
        profileImageUrl,
      });

      setToken(token);
    } catch (err) {
      console.group(`[SignUp Error]`);
      console.log(err);
      console.groupEnd();
    }
  }, [name, email, image, platformId, platformType, profileImageUrl]);

  return (
    <SafeView>
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>????????????</Text>
          </View>
          <CustomTextInput
            title={'??????'}
            value={name}
            setValue={setName}
            style={styles.textInputContainer}
            props={{ returnKeyType: 'next' }}
          />
          <CustomTextInput
            title={'?????????'}
            value={email}
            setValue={setEmail}
            style={styles.textInputContainer}
            editable={!mail}
          />
          <RegisterStudentIdCard setImage={setImage} />
          <Image style={styles.image} source={{ uri: image, height: 180 }} />
        </ScrollView>
        <CustomButton
          text={'????????????'}
          onPress={handleSignUp}
          buttonStyle={styles.signUpButtonContainer}
          textStyle={styles.signUpButtonText}
          hideOnKeyboard={true}
          disabled={!buttonStatus}
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
  image: {
    borderRadius: 12,
    marginTop: 24,
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
