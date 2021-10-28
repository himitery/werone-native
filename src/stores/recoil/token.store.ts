import { atom, selector } from 'recoil';
import TokenRepository, { Token } from '@stores/repositories/TokenRepository';
import RepositoryKeys from '@constants/respositories';

const tokenAtom = atom<Token>({
  key: `${RepositoryKeys.TOKEN}-atom`,
  default: null,
});

const tokenSelector = selector<Token>({
  key: `${RepositoryKeys.TOKEN}-selector`,
  get: ({ get }) => get(tokenAtom),
  set: ({ set }, newValue) => {
    TokenRepository.set(newValue as Token);
    set(tokenAtom, newValue);
  },
});

export default tokenSelector;
