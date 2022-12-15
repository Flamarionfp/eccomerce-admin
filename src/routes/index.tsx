import { AuthRoutes } from './Auth.routes';
import { AppRoutes } from './App.routes';
import { useAuth } from 'hooks/useAuth';

const Routes: React.FC = () => {
  const { isAuth } = useAuth();

  return isAuth ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
