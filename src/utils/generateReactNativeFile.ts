import { Platform } from 'react-native';
import * as mime from 'react-native-mime-types';

interface generateReactNativeFileProps {
  uri: string;
}

interface generateReactNativeFileData {
  name: string;
  type: string;
  uri: string;
}

const generateReactNativeFile = ({
  uri,
}: generateReactNativeFileProps): generateReactNativeFileData => {
  return {
    name: `image-${Date.now()}`,
    type: mime.lookup(uri),
    uri: Platform.select({
      android: uri,
      ios: uri.replace('file://', ''),
    }),
  };
};

export default generateReactNativeFile;
