import { UserData } from 'types';
import { UserState } from './user.types';

const token = localStorage.getItem('token');

export const initialState: UserState = {
  data: {} as UserData,
  token,
  loading: false,
  error: '',
  success: false,
};
