import { useAuth } from 'hooks/useAuth';
import { Button } from 'primereact/button';
import { useAppSelector } from 'store';

export const Login = () => {
  const { handleLogin } = useAuth();
  const isLoading = useAppSelector((state) => !!state.user.loading);

  const onSubmit = () => {
    const data = {
      email: 'flama@email.com',
      password: '12345678',
    };

    handleLogin(data);
  };

  return (
    <div className="gray-500 flex items-center justify-center h-screen w-screen">
      <Button onClick={onSubmit} label="Autenticar" loading={isLoading} />
    </div>
  );
};
