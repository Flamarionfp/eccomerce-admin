import { AuthRoutes } from './Auth.routes';
import { AppRoutes } from './App.routes';

const Routes: React.FC = () => {
  const isAuth = true;

  return isAuth ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
