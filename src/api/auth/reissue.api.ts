import axios from 'axios';
import TokenRepository, { Token } from '@stores/repositories/TokenRepository';
import instance from '@config/axios';
import { useSetRecoilState } from 'recoil';
import tokenSelector from '@stores/recoil/token.store';

const reissueApi = async () => {
  const tokenStore = useSetRecoilState<Token>(tokenSelector);

  const { accessToken, refreshToken } = await TokenRepository.get();

  const { data } = await axios
    .post('/auth/reissue', {
      accessToken,
      refreshToken,
    })
    .then((res) => {
      const { accessToken, refreshToken } = res.data.token;

      tokenStore({ accessToken, refreshToken } as Token);
      instance.defaults.headers.common['authorization'] = accessToken;

      return res.data;
    })
    .catch((err) => {
      console.group(`[Reissue Api Error]`);
      console.log(err);
      console.groupEnd();
    });

  return data;
};

export default reissueApi;
