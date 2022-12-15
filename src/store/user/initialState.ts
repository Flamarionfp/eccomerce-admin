import { UserData } from 'types';
import { UserState } from './user.types';

const token = localStorage.getItem('token');

export const initialState: UserState = {
  data: { token } as UserData,
  loading: false,
  error: '',
  success: false,
};
