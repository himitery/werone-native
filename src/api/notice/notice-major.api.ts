import useSWR from 'swr';

import instance from '@config/axios';
import Notice from '@api/domain/notice';

const noticeMajorApi = () => {
  return useSWR<Notice>('/notice/major', fetcher);
};

const fetcher = async (url) => {
  return instance.get(url).then((res) => {
    return res.data;
  });
};

export default noticeMajorApi;
