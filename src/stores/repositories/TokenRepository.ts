import Repository from '@stores/repositories/Repository';
import RepositoryKeys from '@constants/respositories';

export interface TokenProps {
  token: string;
  refreshToken: string;
}

const TokenRepository = new Repository<TokenProps>(RepositoryKeys.TOKEN, null);

export default TokenRepository;
