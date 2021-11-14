import useSWR, { SWRResponse } from 'swr';
import instance from '@config/axios';
import Group from '@api/domain/group';

interface GetGroupInfoApiProps {
  groupId: number;
}

const getGroupInfoApi = ({
  groupId,
}: GetGroupInfoApiProps): SWRResponse<Group, unknown> => {
  return useSWR<Group>(`/group/info/${groupId}`, fetcher);
};

const fetcher = (url) => {
  return instance.get(url).then((res) => {
    return res.data;
  });
};

export default getGroupInfoApi;
