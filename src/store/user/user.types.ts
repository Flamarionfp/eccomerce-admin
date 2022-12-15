import { UserData } from 'types/user';

export type UserState = {
  data: UserData;
  token: string | null;
  loading: boolean;
  error: string;
  success: boolean;
};
