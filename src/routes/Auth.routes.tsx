import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from 'pages';

export const AuthRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
