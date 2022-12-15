import { useEffect, useRef, useState } from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Toast } from 'primereact/toast';
import { SpeedDial } from 'primereact/speeddial';

export const Home = () => {
  const toast = useRef<Toast>(null);
  const [isLoading, setIsLoading] = useState(true);

  const items = [
    {
      label: 'Add',
      icon: 'pi pi-pencil',
      command: () => {
        toast?.current &&
          toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
      },
    },
    {
      label: 'Update',
      icon: 'pi pi-refresh',
      command: () => {
        toast?.current &&
          toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
      },
    },
    {
      label: 'Delete',
      icon: 'pi pi-trash',
      command: () => {
        toast?.current &&
          toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
      },
    },
  ];

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
        <div className="flex justify-center items-start h-screen w-screen mt-4">
          <SpeedDial model={items} direction="up" />
        </div>
      )}
      <Toast ref={toast} />
    </div>
  );
};
