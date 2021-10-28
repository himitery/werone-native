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
      Keyboard.removeAllListeners('keyboardDidShow');
      Keyboard.removeAllListeners('keyboardDidHide');
    };
  }, []);

  return status;
};

export default isKeyboardVisible;
