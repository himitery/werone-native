import useSWR from 'swr';

import instance from '@config/axios';
import User from '@api/domain/user';

const meApi = () => {
  return useSWR<User>('/user/me', meApiFetcher);
};

export const meApiFetcher = async (url = '/user/me'): Promise<User> => {
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
