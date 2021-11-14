import Week from '@api/domain/week';
import Notice from '@api/domain/notice';

interface Group {
  id: number;
  hostId: number;
  title: string;
  groupImageUrl: string;
  category: string;
  description: string;
  notices: Notice[];
  dayOfWeek: Week;
  time: string;
  place: string;
  joinCondition: string;
  isParticipant: boolean;
  numParticipants: number;
}

export default Group;
