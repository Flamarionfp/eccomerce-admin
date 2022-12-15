import { createAsyncThunk } from '@reduxjs/toolkit';
import { login } from 'services/user';
import { AuthRequest } from 'types';
export const loginAsync = createAsyncThunk(
  'user/login',
  async (data: AuthRequest, { rejectWithValue }) => {
    try {
      const response = await login(data);

      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
