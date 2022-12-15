export type UserData = {
  id: string;
  name: string;
  email: string;
};

export type AuthRequest = {
  email: string;
  password: string;
};

export interface AuthResponse {
  user: UserData;
  token: string;
}
