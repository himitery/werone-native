import instance from '@config/axios';
import PlatformType from '@api/domain/platformType';
import { Token } from '@stores/repositories/TokenRepository';
import User from '@api/domain/user';

interface KakaoLoginApiProps {
  code: string;
}

interface KakaoLoginApiData {
  isUser: boolean;
  oauth: {
    email?: string;
    nickName: string;
    platformId: string;
    platformType: PlatformType;
    profileImageUrl: string;
  };
  token?: Token;
  user?: User;
}

const kakaoLoginApi = async (
  props: KakaoLoginApiProps
): Promise<KakaoLoginApiData> => {
  return await instance.post(`/auth/kakao`, props).then((res) => {
    return res.data;
  });
};

export default kakaoLoginApi;
