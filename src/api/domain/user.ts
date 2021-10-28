import Gender from '@api/domain/gender';
import PlatformType from '@api/domain/platformType';

interface User {
  birth: Date;
  email: string;
  gender: Gender;
  id: number;
  name: string;
  platformId: string;
  platformType: PlatformType;
  profileImageUrl: string;
}

export default User;
