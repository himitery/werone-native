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
        category: '개인톡',
        text: '내용',
        date: '2021-11-09',
      },
      {
        id: 2,
        category: '개인톡',
        text: '내용',
        date: '2021-11-09',
      },
      {
        id: 3,
        category: '개인톡',
        text: '내용',
        date: '2021-11-09',
      },
    ],
    []
  );

  const renderItem = useCallback(
    ({ id, category, text, date }) => (
      <AlarmItem id={id} category={category} text={text} date={date} />
    ),
    []
  );

  return <CustomCard style={styles.alarm}>{alarms.map(renderItem)}</CustomCard>;
};

const styles = StyleSheet.create({
  alarm: {
    marginVertical: 10,
  },
});

export default AlarmList;
