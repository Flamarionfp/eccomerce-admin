import { AuthData, UserData } from 'types';

export const login = async (data: AuthData) => {
  // remove mock and call login api here
  return new Promise<UserData>((resolve) => {
    setTimeout(() => {
      // eslint-disable-next-line no-console
      console.log(data);
      resolve({
        id: '1',
        name: 'Flamarion Fagundes Pinto',
        email: 'flama30@email.com',
        token: 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1',
      });
    }, 1000);
  });
};
