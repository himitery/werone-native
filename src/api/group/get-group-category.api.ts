import useSWR, { SWRResponse } from 'swr';
import Category from '@api/domain/category';
import instance from '@config/axios';

const getGroupCategoryApi = (): SWRResponse<Category[], unknown> => {
  return useSWR(`/group/categories`, fetcher);
};

const fetcher = (url: string) => {
  return instance.get(url).then((res) => {
    return res.data;
  });
};

export default getGroupCategoryApi;
