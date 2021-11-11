import { atom, selector } from 'recoil';

import User from '@api/domain/user';

const meAtom = atom<User>({
  key: `me-atom`,
  default: null,
});

const meSelector = selector<User>({
  key: `me-selector`,
  get: ({ get }) => get(meAtom),
  set: ({ set }, newValue) => {
    set(meAtom, newValue);
  },
});

export default meSelector;
