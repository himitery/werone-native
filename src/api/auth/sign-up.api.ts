import Gender from '@api/domain/gender';
import PlatformType from '@api/domain/platformType';
import { useSetRecoilState } from 'recoil';
import { Token } from '@stores/repositories/TokenRepository';
import tokenSelector from '@stores/recoil/token.store';
import instance from '@config/axios';

interface SignUpApiProps {
  authority: string;
  birth: Date;
  email: string;
  gender: Gender;
  name: string;
  platformId: string;
  platformType: PlatformType;
  profileImageUrl?: string;
}

const signUpApi = async (props: SignUpApiProps) => {
  const tokenStore = useSetRecoilState<Token>(tokenSelector);

  const { data } = await instance.post(`/auth/signup`, props).then((res) => {
    const { accessToken, refreshToken } = res.data.token;

    tokenStore({ accessToken, refreshToken } as Token);
    instance.defaults.headers.common['authorization'] = accessToken;

    return res.data;
  });

  return {
    data,
  };
};

export default signUpApi;
