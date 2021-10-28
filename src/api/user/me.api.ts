import useSWR from 'swr';
import instance from '@config/axios';
import User from '@api/domain/user';

interface MeApiData {
  data: User;
  message: string;
  status: number;
}

const meApi = () => {
  return useSWR<MeApiData>('/user/me', meApiFetcher);
};

export const meApiFetcher = async (url = '/user/me'): Promise<MeApiData> => {
  return await instance
    .get(url)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.group(`[Me Api Fetcher Error]`);
      console.log(err);
      console.groupEnd();
    });
};

export default meApi;
