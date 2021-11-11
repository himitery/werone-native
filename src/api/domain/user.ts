import Gender from '@api/domain/gender';
import AccountStatus from '@api/domain/accountStatus';
import PlatformType from '@api/domain/platformType';

interface User {
  id: number;
  name: string;
  gender: Gender;
  birth: Date;
  email: string;
  status: AccountStatus;
  platformId: string;
  platformType: PlatformType;
  profileImageUrl: string;
}

export default User;
