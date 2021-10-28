import useSWR from 'swr';
import instance from '@config/axios';
import User from '@api/domain/user';

interface MeApiData {
  data: User;
  message: string;
  status: number;
}

const meApi = () => {
  return useSWR<MeApiData>('/user/me', fetcher);
};

const fetcher = async (url: string) => {
  return await instance.get(url).then((res) => {
    return res.data;
  });
};

export default meApi;
