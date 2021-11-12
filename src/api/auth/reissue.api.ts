import TokenRepository, { Token } from '@stores/repositories/TokenRepository';
import instance from '@config/axios';
import { mutate } from 'swr';

interface ReissueApiProps {
  url: string;
  refreshToken: string;
}

const reissueApi = async ({
  url,
  refreshToken,
}: ReissueApiProps): Promise<Token> => {
  return await instance.post('/auth/token', { refreshToken }).then((res) => {
    TokenRepository.set(res.data);
    instance.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${res.data.accessToken}`;
    mutate(url);
    return res.data;
  });
};

export default reissueApi;
