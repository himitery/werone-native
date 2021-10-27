import TokenRepository, { Token } from '@stores/repositories/TokenRepository';
import instance from '@config/axios';
import { mutate } from 'swr';

interface ReissueApiProps {
  refreshToken: string;
}

const reissueApi = async (props: ReissueApiProps): Promise<Token> => {
  return await instance
    .post('/auth/token', props)
    .then((res) => {
      TokenRepository.set(res.data);
      instance.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${res.data.accessToken}`;
      mutate('/user/me');
      return res.data;
    })
    .catch((err) => {
      console.group(`[Reissue Api Error]`);
      console.log(err);
      console.groupEnd();
    });
};

export default reissueApi;
