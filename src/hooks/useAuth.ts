import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { logout } from 'store/user/actions';
import { loginAsync } from 'store/user/thunks';
import { AuthRequest } from 'types';
export const useAuth = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => !!state.user.token);

  const handleLogin = useCallback(
    (data: AuthRequest) => {
      dispatch(loginAsync(data));
    },
    [dispatch]
  );

  const handleLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return { isAuth, handleLogin, handleLogout };
};
