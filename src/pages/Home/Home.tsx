import { useEffect, useRef, useState } from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Toast } from 'primereact/toast';
import { useAuth } from 'hooks/useAuth';
import { Button } from 'primereact/button';

export const Home = () => {
  const { handleLogout } = useAuth();
  const toast = useRef<Toast>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      if (toast?.current) {
        toast.current.show({
          severity: 'success',
          summary: 'Hello World!',
          detail: 'Welcome to our application',
        });
      }
    }, 1000);
  }, []);

  return (
    <div className="h-screen w-full flex items-start justify-center">
      {isLoading ? (
        <div className="flex items-center justify-center flex-1 h-screen">
          <ProgressSpinner />
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen w-screen mt-4">
          <Button label="Sair" onClick={handleLogout} />
        </div>
      )}
      <Toast ref={toast} />
    </div>
  );
};
