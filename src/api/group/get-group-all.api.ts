import useSWR, { SWRResponse } from 'swr';
import Group from '@api/domain/group';
import instance from '@config/axios';

const getGroupAllApi = (): SWRResponse<Group[], unknown> => {
  return useSWR<Group[]>(`/group/all`, fetcher);
};

const fetcher = (url: string) => {
  return instance.get(url).then((res) => {
    return res.data;
  });
};

export default getGroupAllApi;
