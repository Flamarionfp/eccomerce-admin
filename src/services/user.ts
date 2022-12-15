import { AuthRequest, AuthResponse } from 'types';
import { api } from './api';

export const login = async (data: AuthRequest): Promise<AuthResponse> => {
  const response = await api.post('/user/auth', data);

  if (response.status > 200 && response.status < 300) {
    return response.data;
  }

  throw new Error('Login failed');
};
