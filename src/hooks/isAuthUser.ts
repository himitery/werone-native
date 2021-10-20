import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { TokenProps } from '@stores/repositories/TokenRepository';
import tokenSelector from '@stores/recoil/token.store';

/* Todo
 * 1. Token Repository에 Token 존재 여부 확인
 *   1-1. value = true
 * 2. Server로 부터 Token 유효성 확인
 *   2-1. 토큰이 만료되었다면, refreshToken을 이용해 token을 재발급 받고 토큰 업데이트
 *   2-2. 토큰이 조작된 경우, value = false
 * */
const isAuthUser = (): boolean => {
  const [token, setToken] = useRecoilState<TokenProps>(tokenSelector);
  const [value, setValue] = useState<boolean>(false);

  useEffect(() => {
    if (token) {
      setValue(true);
    }
  }, [token]);

  return value;
};

export default isAuthUser;
