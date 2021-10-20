import { atom, selector } from 'recoil';
import { TokenProps } from '@stores/repositories/TokenRepository';
import RepositoryKeys from '@constants/respositories';

const tokenAtom = atom<TokenProps>({
  key: `${RepositoryKeys.TOKEN}-atom`,
  default: null,
});

const tokenSelector = selector<TokenProps>({
  key: `${RepositoryKeys.TOKEN}-selector`,
  get: ({ get }) => get(tokenAtom),
  set: ({ set }, newValue) => {
    set(tokenAtom, newValue);
  },
});

export default tokenSelector;
