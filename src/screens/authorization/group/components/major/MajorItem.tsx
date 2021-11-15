import React from 'react';
import GroupListItem from '@screens/authorization/group/components/list/GroupListItem';
import getMajorInfoApi from '@api/major/get-major-info.api';

const MajorItem: React.FC = () => {
  const { data } = getMajorInfoApi();
  return (
    <GroupListItem
      id={data.id}
      imageUrl={
        'https://www.dankook.ac.kr/html_repositories/images/www/kor_content/est_ui_int01.jpg'
      }
      name={data.name}
      message={data.notices?.map((notice) => notice.title)}
    />
  );
};

export default MajorItem;
