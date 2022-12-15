import { useAppSelector } from 'store';

export const useAuth = () => {
  const isAuth = useAppSelector((state) => !!state.user?.data?.token);

  return { isAuth };
};
