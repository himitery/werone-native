import { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

const isKeyboardVisible = (): boolean => {
  const [status, setStatus] = useState<boolean>(false);

  useEffect(() => {
    const keyboardDidShow = () => {
      setStatus(true);
    };
    const keyboardDidHide = () => {
      setStatus(false);
    };

    Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    return () => {
      Keyboard.removeListener('keyboardDidShow', keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', keyboardDidHide);
    };
  }, []);

  return status;
};

export default isKeyboardVisible;
