import instance from '@config/axios';

interface ParticipantGroupNewApiProps {
  groupId: number;
}

const participantGroupNewApi = ({ groupId }: ParticipantGroupNewApiProps) => {
  return fetcher(`/participant/new`, groupId);
};

const fetcher = (url: string, groupId: number) => {
  return instance.post(url, { groupId }).then((res) => {
    return res.data;
  });
};

export default participantGroupNewApi;
