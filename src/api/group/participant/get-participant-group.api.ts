import useSWR, { SWRResponse } from 'swr';

import instance from '@config/axios';
import Group from '@api/domain/group';

interface GetParticipantGroupApiData {
  myGroupParticipantResponses: Group[];
}

const getParticipantGroupApi = (
  page = 0
): SWRResponse<GetParticipantGroupApiData, unknown> => {
  return useSWR<GetParticipantGroupApiData>(
    `/participant/${page}`,
    getParticipantGroupApiFetcher,
    {}
  );
};

export const getParticipantGroupApiFetcher = async (url: string) => {
  return await instance.get(url).then((res) => {
    return res.data;
  });
};

export default getParticipantGroupApi;
