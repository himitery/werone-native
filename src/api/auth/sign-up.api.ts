import instance from '@config/axios';
import PlatformType from '@api/domain/platformType';
import { Token } from '@stores/repositories/TokenRepository';
import User from '@api/domain/user';
import generateReactNativeFile from '@utils/generateReactNativeFile';

interface SignUpApiProps {
  name: string;
  email: string;
  idCardImage: string;
  platformId: string;
  platformType: PlatformType;
  profileImageUrl?: string;
}

interface SignUpApiData {
  token: Token;
  user: User;
}

const signUpApi = async ({
  name,
  email,
  idCardImage,
  platformId,
  platformType,
  profileImageUrl,
}: SignUpApiProps): Promise<SignUpApiData> => {
  const data = new FormData();

  data.append('name', name);
  data.append('email', email);
  data.append('idCardImage', generateReactNativeFile({ uri: idCardImage }));
  data.append('platformId', platformId);
  data.append('platformType', platformType);
  data.append('profileImageUrl', profileImageUrl);

  return await instance
    .post(`/auth/signup`, data, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    })
    .then((res) => {
      return res.data;
    });
};

export default signUpApi;
