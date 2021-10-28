import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import TokenRepository, { Token } from '@stores/repositories/TokenRepository';
import tokenSelector from '@stores/recoil/token.store';
import { meApiFetcher } from '@api/user/me.api';
import instance from '@config/axios';
import reissueApi from '@api/auth/reissue.api';

const isAuthUser = (): boolean => {
  const [token, setToken] = useRecoilState<Token>(tokenSelector);
  const [auth, setAuth] = useState<boolean>(false);

  useEffect(() => {
    if (!token) {
      setAuth(false);
      TokenRepository.get().then((res) => {
        if (res) setToken(res);
      });
    } else {
      instance.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${token.accessToken}`;
      meApiFetcher().then((res) => {
        if (!res) {
          reissueApi({
            url: '/user/me',
            refreshToken: token.refreshToken,
          }).then((res) => {
            if (!res) {
              setToken(null);
              setAuth(false);
            } else {
              setToken(res);
              setAuth(true);
            }
          });
        } else {
          setAuth(true);
        }
      });
    }
  }, [token]);

  return auth;
};

export default isAuthUser;
