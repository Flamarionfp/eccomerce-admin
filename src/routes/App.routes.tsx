import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from 'pages';

export const AppRoutes = () => {
  const routes = [
    {
      path: '/',
      element: <Home />,
      exact: true,
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
