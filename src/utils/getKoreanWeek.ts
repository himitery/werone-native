import Week from '@api/domain/week';

const getKoreanWeek = (week: Week): string => {
  if (week === Week.MONDAY) {
    return '월요일';
  } else if (week === Week.TUESDAY) {
    return '화요일';
  } else if (week === Week.WEDNESDAY) {
    return '수요일';
  } else if (week === Week.THURSDAY) {
    return '목요일';
  } else if (week === Week.FRIDAY) {
    return '금요일';
  } else if (week === Week.SATURDAY) {
    return '토요일';
  } else if (week === Week.SUNDAY) {
    return '일요일';
  } else {
    return '';
  }
};

export default getKoreanWeek;
