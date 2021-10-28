import Repository from '@stores/repositories/Repository';
import RepositoryKeys from '@constants/respositories';

export interface Token {
  accessToken: string;
  refreshToken: string;
}

const TokenRepository = new Repository<Token>(RepositoryKeys.TOKEN, null);

export default TokenRepository;
