import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, RegisterUser } from 'pages';

export const AuthRoutes = () => {
  const routes = [
    {
      path: '/',
      element: <Login />,
      exact: true,
    },
    {
      path: '/register-user',
      element: <RegisterUser />,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((routeProps) => (
          <Route key={routeProps.path} {...routeProps} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
