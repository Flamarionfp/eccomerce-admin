import { UserData } from 'types/user';

export type UserState = {
  data: UserData;
  loading: boolean;
  error: string;
  success: boolean;
};
