import { atom } from 'recoil';

export const bottomBarVisibleStore = atom<boolean>({
  key: `bottomBarVisible-atom`,
  default: true,
});
