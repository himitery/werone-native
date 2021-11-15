import useSWR from 'swr';

import instance from '@config/axios';
import Major from '@api/domain/major';

const getMajorInfoApi = () => {
  return useSWR<Major>(`/major/user`, fetcher);
};

const fetcher = async (url) => {
  return instance.get(url).then((res) => {
    return res.data;
  });
};

export default getMajorInfoApi;
