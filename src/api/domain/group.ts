import Week from '@api/domain/week';

interface Group {
  id: number;
  hostId: number;
  title: string;
  groupImageUrl: string;
  category: string;
  description: string;
  dayOfWeek: Week;
  time: string;
  place: string;
  joinCondition: string;
}

export default Group;
