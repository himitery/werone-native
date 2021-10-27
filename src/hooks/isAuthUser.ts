import { useEffect, useState } from 'react';

import TokenRepository, { Token } from '@stores/repositories/TokenRepository';
import meApi from '@api/user/me.api';
import instance from '@config/axios';

const isAuthUser = (): boolean => {
  const { data, mutate } = meApi();

  const [token, setToken] = useState<Token>(null);
  const [value, setValue] = useState<boolean>(false);

  useEffect(() => {
    TokenRepository.get().then((res) => {
      setToken(res);
    });
  }, []);

  useEffect(() => {
    if (!token) return;
    setValue(true);
    instance.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${token.accessToken}`;
    mutate();
  }, [token]);

  useEffect(() => {
    setValue(!!data);
  }, [data]);

  return value;
};

export default isAuthUser;
