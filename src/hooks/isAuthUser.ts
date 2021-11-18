import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import TokenRepository, { Token } from '@stores/repositories/TokenRepository';
import tokenSelector from '@stores/recoil/token.store';
import { meApiFetcher } from '@api/user/me.api';
import instance from '@config/axios';
import reissueApi from '@api/auth/reissue.api';
import AccountStatus from '@api/domain/accountStatus';
import meSelector from '@stores/recoil/me.store';
import User from '@api/domain/user';

const isAuthUser = (): [isAuth: boolean, accountStatus: AccountStatus] => {
  const [token, setToken] = useRecoilState<Token>(tokenSelector);
  const [me, setMe] = useRecoilState<User>(meSelector);
  const [auth, setAuth] = useState<boolean>(false);
  const [accountStatus, setAccountStatus] = useState<AccountStatus>(null);

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
            } else {
              setToken(res);
            }
          });
        } else {
          setAuth(true);
          setMe(res);
        }
      });
    }
  }, [token]);

  useEffect(() => {
    if (!me) return;
    setAccountStatus(me?.status);
  }, [me]);

  return [auth, accountStatus];
};

export default isAuthUser;
