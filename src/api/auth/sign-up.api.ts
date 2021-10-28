import PlatformType from '@api/domain/platformType';
import { Token } from '@stores/repositories/TokenRepository';
import instance from '@config/axios';
import User from '@api/domain/user';

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

const signUpApi = async (props: SignUpApiProps): Promise<SignUpApiData> => {
  return await instance.post(`/auth/signup`, props).then((res) => {
    return res.data;
  });
};

export default signUpApi;
