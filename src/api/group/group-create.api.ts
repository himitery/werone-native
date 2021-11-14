import instance from '@config/axios';
import Group from '@api/domain/group';
import generateReactNativeFile from '@utils/generateReactNativeFile';

interface GroupCreateApiProps {
  name: string;
  image: string;
  description: string;
  condition: string;
  place: string;
  week: string;
}

const groupCreateApi = ({
  name,
  image,
  description,
  condition,
  place,
  week,
}: GroupCreateApiProps): Promise<Group> => {
  const data = new FormData();

  data.append('title', name);
  data.append('groupImage', generateReactNativeFile({ uri: image }));
  data.append('description', description);
  data.append('joinCondition', condition);
  data.append('place', place);
  data.append('dayOfWeek', week);

  return fetcher(`/group/create`, data);
};

const fetcher = (url: string, data: FormData) => {
  return instance
    .post(url, data, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    })
    .then((res) => {
      return res.data;
    });
};

export default groupCreateApi;
