import React, { useCallback, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import CustomCard from '@components/common/CustomCard';
import AlarmItem from '@screens/authorization/home/components/alarm/AlarmItem';
import Alarm from '@api/domain/alarm';

const AlarmList = () => {
  const alarms = useMemo<Alarm[]>(
    () => [
      {
        id: 1,
        category: '공지',
        imageUrl:
          'https://www.dankook.ac.kr/html_repositories/images/www/kor_content/est_ui_int01.jpg',
        text: '기말고사 야식행사 안내',
        date: '2021-11-15',
      },
      {
        id: 2,
        category: '개인톡',
        imageUrl: 'https://avatars.githubusercontent.com/u/31758135?v=4',
        text: '지원아 너 대학영어2 과제 했어?',
        date: '2021-11-15',
      },
      {
        id: 3,
        category: '그룹',
        imageUrl: 'https://vanvo.co.kr/upload/Repimg/210308004.jpg',
        text: '토익 900점 목표 그룹에 가입 ..',
        date: '2021-11-13',
      },
    ],
    []
  );

  const renderItem = useCallback(
    ({ id, category, imageUrl, text, date }) => (
      <AlarmItem
        id={id}
        category={category}
        imageUrl={imageUrl}
        text={text}
        date={date}
      />
    ),
    []
  );

  return (
    <CustomCard style={styles.container}>{alarms.map(renderItem)}</CustomCard>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});

export default AlarmList;
